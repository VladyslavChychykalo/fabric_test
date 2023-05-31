import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import styles from "./Test.module.css";

const Fabric = () => {
  const [textWidthState, setTextWidth] = useState(400);
  const [textHeightState, setTextHeight] = useState(80);
  const [textState, setText] = useState("Hello, Fabric.js!");
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    const addText = () => {
      //   const text = new fabric.Text("Hello, Fabric.js!", {
      //     fontSize: 250,
      //     left: 0,
      //     top: 0,
      //     lineHeight: 1,
      //     originX: "left",
      //     fontFamily: "Helvetica",
      //     fontWeight: "bold",
      //     statefullCache: true,
      //     scaleX: 1,
      //     scaleY: 1,
      //   });

      const text = new fabric.Text(textState.toUpperCase(), {
        left: 0,
        top: 0,
        fontSize: 250,
        fill: "red",
        selectable: false,
        // fontFamily: 'Arial', // Устанавливаем шрифт
        // fontStyle: 'uppercase', // Применяем преобразование текста
      });

      //   text.text = text.text.toUpperCase();

      const desiredWidth = textWidthState; // Желаемая ширина текста
      const desiredHeight = textHeightState; // Желаемая высота текста

      const scaleX = desiredWidth / text.width;
      const scaleY = desiredHeight / text.height;

      text.set({ scaleX, scaleY });

      const textWidth = text.getScaledWidth(); // Получаем фактическую ширину текста
      const textHeight = text.getScaledHeight();

      containerRef.current.style.width = `${textWidth}px`;
      containerRef.current.style.height = `${textHeight}px`;

      canvas.setDimensions({ width: textWidth, height: textHeight });

      canvas.add(text);
    };

    addText();

    // const setCanvasSize = () => {
    //   const containerWidth = canvasRef.current.offsetWidth; // Получаем ширину родительского контейнера
    //   const containerHeight = canvasRef.current.offsetHeight;
    //   console.log(containerWidth) // Получаем высоту родительского контейнера

    //   canvas.setWidth(containerWidth); // Устанавливаем ширину холста
    //   canvas.setHeight(containerHeight); // Устанавливаем высоту холста
    //   canvas.renderAll(); // Перерисовываем холст
    // };

    // setCanvasSize();

    // window.addEventListener("resize", setCanvasSize);

    return () => {
      //   window.removeEventListener("resize", setCanvasSize);
      canvas.dispose();
    };
  }, [textWidthState, textHeightState]);

  return (
    <div className={styles.canvasContainer} ref={containerRef}>
      <div className={styles.canvasHeight}>{textHeightState} см</div>
      <div className={styles.canvasWidth}>{textWidthState} см</div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Fabric;
