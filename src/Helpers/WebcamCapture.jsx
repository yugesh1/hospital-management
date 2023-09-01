import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract, { createWorker } from "tesseract.js";
import { Buffer } from "buffer";

const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const [decodedImage, setDecodedImage] = useState("");

  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    console.log("imageSrc", imageSrc);

    setImage(imageSrc);

    var strImage = imageSrc.replace(/^data:image\/[a-z]+;base64,/, "");

    console.log("strImage", strImage);

    let imageBuffer = Buffer.from(strImage, "base64");
    console.log("image buffer", imageBuffer);
    const worker = createWorker({
      logger: (m) => console.log(m),
    });

    (async () => {
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      console.log("Recognizing...");
      const {
        data: { text },
      } = await worker.recognize(imageBuffer);
      console.log("Recognized text:", text);

      await worker.terminate();
    })();
  }, [webcamRef]);

  const captureButton = (e) => {
    e.preventDefault();
    capture();
  };

  return (
    <div>
      <div className="px-4">
        {image === "" ? (
          <Webcam
            audio={false}
            height={250}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={280}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </div>
      <div className="py-2 my-2">
        {image !== "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="btn py-2 btn-primary"
          >
            Retake Image
          </button>
        ) : (
          <button className="btn btn-primary" onClick={captureButton}>
            Capture
          </button>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;
