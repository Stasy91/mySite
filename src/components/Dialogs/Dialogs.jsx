import React from "react";
import s from "./Dialogs.module.css";
import Search from "../Kit/Search/Search";
import DiaolgsItem from "./DiaolgsItem/DiaolgsItem";

const DialogData = [
  {
    id: 1,
    src: "https://ouch-cdn2.icons8.com/iaSvWx81YYzXgkdlhtQ4VVYi3fojJIC9MGKvMf1yGKs/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTY5/LzIyYWNhYTcwLTI4/OTAtNGUwZC04ZGFj/LTI2ZmFmZDJjNzY2/YS5wbmc.png",
    children: "Сергей",
  },
  {
    id: 2,
    src: "https://ouch-cdn2.icons8.com/XHNV1rKR-EzAzFYwXh2fWkZos4PwE48i-3FH5YotVpk/rs:fit:368:331/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODUw/L2FlZGM0MGNkLTAy/YzYtNDI4OS1hYjI4/LTlmZDlmNTIyMTUw/Zi5wbmc.png",
    children: "Кирилл",
  },
  {
    id: 3,
    src: "https://ouch-cdn2.icons8.com/o7VVy0frBxTY_yRmbuc-ocHYQJ12f-Hcv_Q8daW1dLI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQ3/L2YyMzZhMzFmLTZm/YjYtNDk4OC1hY2Mw/LWUzNWMwMDMyMmU4/My5wbmc.png",
    children: "Гоша",
  },
  {
    id: 4,
    src: "https://ouch-cdn2.icons8.com/kKRJ-99ZSPwUYJ2Vh0yFTBm6q-Txpjn7SLV2onmiMEg/rs:fit:368:403/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjA1/LzEwYzVjYzJhLTY4/OGUtNDAxMi04OWU5/LWU1Y2Q1NjQ4ODg0/Ny5wbmc.png",
    children: "Кристина",
  },
  {
    id: 5,
    src: "https://ouch-cdn2.icons8.com/FLLwsMrNDj-zo4wGMR6cpANHh-pdnxO4KAE5VLqpntY/rs:fit:368:394/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEv/OTQ2YzRkYWMtYzYw/ZC00MDYwLWIzOGYt/NDViODI2NzBiYjcy/LnBuZw.png",
    children: "Инга",
  },
  {
    id: 6,
    src: "https://ouch-cdn2.icons8.com/B31cMgEyXImGUeG7amjFsZvckHrJMul_sp9K9DV5Kyw/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTUw/LzI1NWJlOTUyLTQy/MmUtNGQwYy1hMzg4/LTMxMjkxNmU3OTcz/ZS5wbmc.png",
    children: "Таисия",
  },
];

const Dialogs = (props) => (
  <div className={s.dialogPage}>
    <div className={s.linkList}>
      <div className={s.serchModule}>
        <Search />
      </div>

      {DialogData.map((item) => (
        <DiaolgsItem to={`/dialogs/${item.id}`} src={item.src}>
          {item.children}
        </DiaolgsItem>
      ))}
    </div>

    <div className={s.dialogMessages}>
      <div>
        <div className={s.messageUser}>hi</div>
      </div>
      <div>
        <div className={s.message}>hello</div>
      </div>
      <div>
        <div className={s.messageUser}>how are you</div>
      </div>
      <div>
        <div className={s.message}>You are the best in life</div>
      </div>
      <div>
        <div className={s.message}>
          Повседневная практика показывает, что рамки и место обучения кадров
          обеспечивает широкому кругу (специалистов) участие в формировании
          позиций, занимаемых участниками в отношении поставленных задач.{" "}
        </div>
      </div>
      <div>
        <div className={s.messageUser}>
          Повседневная практика показывает, что рамки и место обучения кадров
          обеспечивает широкому кругу (специалистов) участие в формировании
          позиций, занимаемых участниками в отношении поставленных задач.{" "}
        </div>
      </div>
      <div>
        <div className={s.messageUser}>
          Повседневная практика показывает, что рамки и место обучения кадров
          обеспечивает широкому кругу (специалистов) участие в формировании
          позиций, занимаемых участниками в отношении поставленных задач.{" "}
        </div>
      </div>
      <div>
        <div className={s.messageUser}>
          Повседневная практика показывает, что рамки и место обучения кадров
          обеспечивает широкому кругу (специалистов) участие в формировании
          позиций, занимаемых участниками в отношении поставленных задач.{" "}
        </div>
      </div>
      <div>
        <div className={s.messageUser}>
          Повседневная практика показывает, что рамки и место обучения кадров
          обеспечивает широкому кругу (специалистов) участие в формировании
          позиций, занимаемых участниками в отношении поставленных задач.{" "}
        </div>
      </div>
      <div>
        <div className={s.messageUser}>
          Повседневная практика показывает, что рамки и место обучения кадров
          обеспечивает широкому кругу (специалистов) участие в формировании
          позиций, занимаемых участниками в отношении поставленных задач.{" "}
        </div>
      </div>
    </div>
  </div>
);

export default Dialogs;
