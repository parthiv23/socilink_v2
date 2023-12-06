import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SociolinkChatPageBlack.module.css";

const SociolinkChatPageBlack: FunctionComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onRectangle8Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onHomeAltIconClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.sociolinkChatPageBlack}>
      <div className={styles.sociolinkChatPageBlackChild} />
      <div className={styles.sociolinkChatPageBlackItem} />
      <div className={styles.frameParent} data-animate-on-scroll>
        <div className={styles.frameWrapper} data-animate-on-scroll>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameItem} />
      </div>
      <div
        className={styles.sociolinkChatPageBlackInner}
        data-animate-on-scroll
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleParent} data-animate-on-scroll>
        <div className={styles.frameInner} />
        <img className={styles.searchAltIcon} alt="" src="/searchalt2.svg" />
        <div className={styles.search}>Search</div>
      </div>
      <div className={styles.menuParent} data-animate-on-scroll>
        <div className={styles.menu}>Menu</div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-111.svg" />
        <img className={styles.frameChild1} alt="" src="/rectangle-111.svg" />
        <div className={styles.more}>More</div>
        <img className={styles.chatIcon} alt="" src="/chat2.svg" />
        <img className={styles.frameChild2} alt="" src="/rectangle-111.svg" />
        <div className={styles.activity}>Activity</div>
        <img className={styles.frameChild3} alt="" src="/rectangle-111.svg" />
        <img className={styles.activityIcon} alt="" src="/activity2.svg" />
        <img
          className={styles.chartBubbleIcon}
          alt=""
          src="/chartbubble1.svg"
        />
        <img
          className={styles.frameChild4}
          alt=""
          src="/rectangle-111.svg"
          onClick={onRectangle8Click}
        />
        <img
          className={styles.homeAltIcon}
          alt=""
          src="/homealt2.svg"
          onClick={onHomeAltIconClick}
        />
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.chats}>Chats</div>
        <div className={styles.explore}>Explore</div>
        <img className={styles.pathIcon} alt="" src="/path1.svg" />
        <img className={styles.pathIcon1} alt="" src="/path1.svg" />
        <img className={styles.pathIcon2} alt="" src="/path1.svg" />
        <img className={styles.pathIcon3} alt="" src="/path1.svg" />
      </div>
      <div className={styles.vectorParent} data-animate-on-scroll>
        <img
          className={styles.frameChild5}
          alt=""
          src="/rectangle-31.svg"
          data-animate-on-scroll
        />
        <div className={styles.parthivShah}>Parthiv Shah</div>
        <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
      </div>
      <div className={styles.sociolink}>Sociolink</div>
      <img
        className={styles.vector377Stroke}
        alt=""
        src="/vector-377-stroke.svg"
      />
      <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
      <div className={styles.rectangleGroup} data-animate-on-scroll>
        <div className={styles.frameChild6} />
        <img className={styles.frameChild7} alt="" src="/ellipse-33@2x.png" />
        <img className={styles.frameChild8} alt="" src="/ellipse-4@2x.png" />
        <img
          className={styles.phnumberCircleFourFillIcon}
          alt=""
          src="/phnumbercirclefourfill.svg"
        />
        <div className={styles.friendsForever}>Friends Forever</div>
        <div className={styles.hahahahah}>Hahahahah!</div>
        <div className={styles.today952pm}>Today, 9.52pm</div>
        <div className={styles.yesterday1231pm}>Yesterday, 12.31pm</div>
        <div className={styles.kyuuuuu}>Kyuuuuu???</div>
        <div className={styles.myGang}>My Gang</div>
        <b className={styles.groups}>Groups</b>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.frameGroup} data-animate-on-scroll>
        <div className={styles.frameDiv} />
        <div className={styles.frameChild9} />
        <img className={styles.frameChild10} alt="" src="/ellipse-11@2x.png" />
        <div className={styles.frameChild11} />
        <div className={styles.frameChild12} />
        <img
          className={styles.fluentcamera24RegularIcon}
          alt=""
          src="/fluentcamera24regular.svg"
        />
        <img
          className={styles.fluentemojiLaugh16RegularIcon}
          alt=""
          src="/fluentemojilaugh16regular.svg"
        />
        <img
          className={styles.antDesignpaperClipOutlinedIcon}
          alt=""
          src="/antdesignpaperclipoutlined.svg"
        />
        <div className={styles.joy}>Joy</div>
        <div className={styles.onlineLast}>Online - Last seen, 2.02pm</div>
        <div className={styles.today830pm}>Today, 8.30pm</div>
        <div className={styles.today836pm}>Today, 8.36pm</div>
        <div className={styles.today833pm}>Today, 8.33pm</div>
        <div className={styles.today834pm}>Today, 8.34pm</div>
        <div className={styles.today858pm}>Today, 8.58pm</div>
        <div className={styles.typeYourMessage}>Type your message here...</div>
        <div className={styles.frameChild13} />
        <img
          className={styles.bithreeDotsVerticalIcon}
          alt=""
          src="/bithreedotsvertical.svg"
        />
        <img
          className={styles.ciphoneOutlineIcon}
          alt=""
          src="/ciphoneoutline.svg"
        />
        <img
          className={styles.fluentvideo16RegularIcon}
          alt=""
          src="/fluentvideo16regular.svg"
        />
        <img className={styles.bimicFillIcon} alt="" src="/bimicfill.svg" />
        <div className={styles.frameChild14} />
        <div className={styles.frameChild15} />
        <div className={styles.frameChild16} />
        <div className={styles.frameChild17} />
        <div className={styles.frameChild18} />
        <div className={styles.frameChild19} />
        <div className={styles.ellipseDiv} />
        <div className={styles.frameChild20} />
        <div className={styles.frameChild21} />
        <div className={styles.frameChild22} />
        <div className={styles.frameChild23} />
        <div className={styles.frameChild24} />
        <div className={styles.heyThere}>Hey There!</div>
        <div className={styles.howAreYou}>How are you?</div>
        <div className={styles.iAmDoing}>
          I am doing well, Can we meet tomorrow?
        </div>
        <div className={styles.hello}>Hello!</div>
        <div className={styles.iAmFine}>I am fine and how are you?</div>
        <div className={styles.yesSure}>Yes Sure!</div>
      </div>
      <div
        className={styles.phnumberCircleThreeFillParent}
        data-animate-on-scroll
      >
        <img
          className={styles.phnumberCircleThreeFillIcon}
          alt=""
          src="/phnumbercirclethreefill.svg"
        />
        <div className={styles.frameChild25} />
        <img className={styles.frameChild26} alt="" src="/ellipse-5@2x.png" />
        <div className={styles.wednesday912am}>Wednesday, 9.12am</div>
        <div className={styles.itsNotGoing}>It’s not going to happen</div>
        <div className={styles.hiking}>Hiking</div>
        <img className={styles.frameChild27} alt="" src="/ellipse-6@2x.png" />
        <img className={styles.frameChild28} alt="" src="/ellipse-9@2x.png" />
        <img className={styles.frameChild29} alt="" src="/ellipse-7@2x.png" />
        <img className={styles.frameChild30} alt="" src="/ellipse-10@2x.png" />
        <img className={styles.frameChild31} alt="" src="/ellipse-8@2x.png" />
        <img
          className={styles.charmtickDoubleIcon}
          alt=""
          src="/charmtickdouble.svg"
        />
        <img
          className={styles.charmtickDoubleIcon1}
          alt=""
          src="/charmtickdouble1.svg"
        />
        <img
          className={styles.phnumberCircleFiveFillIcon}
          alt=""
          src="/phnumbercirclefivefill.svg"
        />
        <img
          className={styles.phnumberCircleOneFillIcon}
          alt=""
          src="/phnumbercircleonefill.svg"
        />
        <img
          className={styles.phnumberCircleOneFillIcon1}
          alt=""
          src="/phnumbercircleonefill.svg"
        />
        <div className={styles.anil}>Anil</div>
        <div className={styles.billGates}>Bill Gates</div>
        <div className={styles.maryMaam}>Mary ma’am</div>
        <div className={styles.aprilFoolsDay}>April fool’s day</div>
        <div className={styles.nevermindBro}>Nevermind bro</div>
        <div className={styles.today952pm1}>Today, 9.52pm</div>
        <div className={styles.today240pm}>Today, 2.40pm</div>
        <div className={styles.today1211pm}>Today, 12.11pm</div>
        <div className={styles.yesterday1231pm1}>Yesterday, 12.31pm</div>
        <div className={styles.wednesday1112am}>Wednesday, 11.12am</div>
        <div className={styles.baag}>Baag</div>
        <div className={styles.okayBrotherLets}>
          Okay, brother. let’s see...
        </div>
        <div className={styles.youHaveTo}>You have to report it...</div>
        <div className={styles.raj}>Raj</div>
        <div className={styles.victoriaH}>Victoria H</div>
        <b className={styles.people}>People</b>
        <div className={styles.frameChild32} />
        <div className={styles.frameChild33} />
        <div className={styles.frameChild34} />
        <div className={styles.frameChild35} />
        <img className={styles.lineIcon} alt="" src="/line-7.svg" />
        <div className={styles.frameChild36} />
        <div className={styles.div}>+</div>
        <div className={styles.frameChild37} />
      </div>
      <div className={styles.settingsParent}>
        <div className={styles.settings}>Settings</div>
        <img className={styles.frameIcon} alt="" src="/frame-21.svg" />
      </div>
      <div className={styles.chatsWrapper} data-animate-on-scroll>
        <div className={styles.chats1}>Chats</div>
      </div>
    </div>
  );
};

export default SociolinkChatPageBlack;
