import React from "react";
import s from "./PhotosTextPost.module.css";

const PhotosTextPost = () => {
  return (
    <div className={s.stylePost}>
      <div className={s.postscript}>
        <div> A Thousand Words </div>
        <div>01/17/2014</div>
        <div>8 minutes read</div>
      </div>

      <h3>Понорамные фотографии и длина объектва</h3>
      <div className={s.postText}>
        Начинающие фотографы наверняка видели захватывающие кадры с движущимися
        объектами и хотели их повторить. Длиннофокусные объективы выполняют
        съемку с более узким углом обзора, чем угол зрения человеческого глаза.
        Фокусное расстояние объектива измеряется в миллиметрах и представляет
        собой расстояние от объектива до матрицы видеокамеры, на которую и
        фокусируется изображение.
      </div>
      <div className={s.photosStyle}>
        <img
          src="https://ethnomir.ru/upload/medialibrary/b20/ocean1.jpg"
          alt=""
        ></img>
        <img
          src="https://natworld.info/wp-content/uploads/2020/04/foto-ostrova.jpg"
          alt=""
        ></img>
      </div>
      <div className={s.postscript}>Flight over the country - 2014</div>
    </div>
  );
};

export default PhotosTextPost;
