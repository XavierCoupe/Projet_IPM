import React, { useRef, useState } from 'react';
import { saveAs } from 'file-saver';

/**
 * @author Wandrille BALLEREAU
 * @description Permet de prendre une photo directement avant de l'envoyer au serveur (Doesn't work at this time)
 * @returns Le code HTML pour ouvrir l'appareil photo et prendre une photo
 */
const TakePicture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  //ouverture de la caméra
  const openCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(newStream);
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  //fermeture de la caméra
  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
      });
      setStream(null);
      setImageDataUrl(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  //prise de la photo
  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
      const url = canvas.toDataURL('image/png');
      setImageDataUrl(url);
      console.log(url);
      closeCamera();
    }
  };

  //téléchargement de la photo
  const downloadImage = () => {
    if (imageDataUrl) {
      fetch(imageDataUrl)
        .then(res => res.blob())
        .then(blob => {
          saveAs(blob, 'photo.png');
        })
        .catch(error => {
          console.error('Error downloading image:', error);
        });
    }
  };

  return (
    <div>
      <button onClick={openCamera}>Ouvrir l'appareil photo</button>
      {stream && <button onClick={takePhoto}>Prendre une photo</button>}
        <button onClick={downloadImage} style={{ display: 'none' }} ref={(button) => button && button.click()}>
          Télécharger l'image
        </button>
      <br />
      <video ref={videoRef} autoPlay style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
    </div>
  );
};

export default TakePicture;
