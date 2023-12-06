import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
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

  const onThemeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLightModeDarkModeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/sociolink-chat-page-black");
  }, [navigate]);

  const onChatIconClick = useCallback(() => {
    navigate("/sociolink-chat-page-black");
  }, [navigate]);

  const onChatsTextClick = useCallback(() => {
    navigate("/sociolink-chat-page-black");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} data-animate-on-scroll />
      <div className={styles.theme} onClick={onThemeTextClick}>
        Theme
      </div>
      <img className={styles.lineIcon} alt="" src="/line-11.svg" />
      <div className={styles.rectangleDiv} />
      <div
        className={styles.lightModeDarkMode}
        onClick={onLightModeDarkModeClick}
      >
        <div className={styles.lightModeDarkModeChild} data-animate-on-scroll />
        <div className={styles.lightModeDarkModeItem} data-animate-on-scroll />
        <img
          className={styles.lightModeDarkModeInner}
          alt=""
          src="/ellipse-32.svg"
        />
      </div>
      <div className={styles.leafParent} data-animate-on-scroll>
        <img className={styles.leafIcon} alt="" src="/leaf1.svg" />
        <div className={styles.sociolink}>Sociolink</div>
      </div>
      <div className={styles.vectorParent} data-animate-on-scroll>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-31.svg" />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
        <div className={styles.parthivShah}>Parthiv Shah</div>
      </div>
      <div className={styles.moreParent} data-animate-on-scroll>
        <div className={styles.more}>More</div>
        <div className={styles.menu}>Menu</div>
        <img
          className={styles.frameChild1}
          alt=""
          src="/rectangle-111.svg"
          onClick={onRectangle3Click}
        />
        <img className={styles.frameChild2} alt="" src="/rectangle-111.svg" />
        <div className={styles.more1}>More</div>
        <img
          className={styles.chatIcon}
          alt=""
          src="/chat1.svg"
          onClick={onChatIconClick}
        />
        <img className={styles.frameChild3} alt="" src="/rectangle-111.svg" />
        <div className={styles.activity}>Activity</div>
        <img className={styles.frameChild4} alt="" src="/rectangle-111.svg" />
        <img className={styles.activityIcon} alt="" src="/activity1.svg" />
        <img
          className={styles.chartBubbleIcon}
          alt=""
          src="/chartbubble1.svg"
        />
        <img className={styles.frameChild5} alt="" src="/rectangle-111.svg" />
        <img className={styles.homeAltIcon} alt="" src="/homealt1.svg" />
        <div className={styles.home}>Home</div>
        <div className={styles.chats} onClick={onChatsTextClick}>
          Chats
        </div>
        <div className={styles.explore}>Explore</div>
        <img className={styles.pathIcon} alt="" src="/path1.svg" />
        <img className={styles.pathIcon1} alt="" src="/path1.svg" />
        <img className={styles.pathIcon2} alt="" src="/path1.svg" />
        <img className={styles.pathIcon3} alt="" src="/path1.svg" />
      </div>
      <div className={styles.rectangleParent} data-animate-on-scroll>
        <img className={styles.frameChild6} alt="" src="/rectangle-42@2x.png" />
        <div className={styles.tips}>Tips</div>
      </div>
      <div className={styles.feedsParent} data-animate-on-scroll>
        <div className={styles.feeds}>Feeds</div>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <img className={styles.pathStrokeIcon} alt="" src="/path-stroke.svg" />
        <img className={styles.frameChild7} alt="" src="/vector-3411.svg" />
        <img className={styles.frameChild8} alt="" src="/vector-3421.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.pathStrokeIcon1} alt="" src="/path-stroke.svg" />
        <img className={styles.frameChild9} alt="" src="/vector-3411.svg" />
        <img className={styles.frameChild10} alt="" src="/vector-3421.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <img className={styles.pathStrokeIcon2} alt="" src="/path-stroke.svg" />
        <img className={styles.frameChild11} alt="" src="/vector-341.svg" />
        <img className={styles.frameChild12} alt="" src="/vector-336.svg" />
        <div className={styles.all}>All</div>
        <img className={styles.frameChild13} alt="" src="/rectangle-9@2x.png" />
        <img
          className={styles.frameChild14}
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className={styles.frameChild15}
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className={styles.frameChild16}
          alt=""
          src="/rectangle-91@2x.png"
        />
        <img
          className={styles.frameChild17}
          alt=""
          src="/rectangle-12@2x.png"
        />
        <img
          className={styles.frameChild18}
          alt=""
          src="/rectangle-15@2x.png"
        />
        <img className={styles.frameChild19} alt="" src="/ellipse-14@2x.png" />
        <div className={styles.followers}>Followers</div>
        <div className={styles.close}>Close</div>
        <div className={styles.popular}>Popular</div>
        <img className={styles.frameChild20} alt="" src="/ellipse-15@2x.png" />
        <img className={styles.frameChild21} alt="" src="/ellipse-16@2x.png" />
        <img className={styles.frameChild22} alt="" src="/ellipse-17@2x.png" />
        <img className={styles.frameChild23} alt="" src="/ellipse-18@2x.png" />
        <img className={styles.frameChild24} alt="" src="/ellipse-19@2x.png" />
        <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
        <img className={styles.heartIcon} alt="" src="/heart2.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <img className={styles.pathStrokeIcon2} alt="" src="/path-stroke.svg" />
        <img className={styles.heartIcon1} alt="" src="/heart3.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector2.svg" />
        <img className={styles.pathStrokeIcon4} alt="" src="/path-stroke.svg" />
        <img className={styles.frameChild25} alt="" src="/vector-341.svg" />
        <img className={styles.frameChild26} alt="" src="/vector-336.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector1.svg" />
        <img className={styles.pathStrokeIcon5} alt="" src="/path-stroke.svg" />
        <img className={styles.frameChild27} alt="" src="/vector-3411.svg" />
        <img className={styles.frameChild28} alt="" src="/vector-3421.svg" />
      </div>
      <div className={styles.rectangleGroup} data-animate-on-scroll>
        <div className={styles.frameChild29} />
        <div className={styles.like}>like</div>
        <div className={styles.reply}>reply</div>
        <div className={styles.wantsToAdd}>wants to add you to friends.</div>
        <div className={styles.seeAll}>See all</div>
        <div className={styles.notifications}>Notifications</div>
        <img className={styles.frameChild30} alt="" src="/ellipse-25@2x.png" />
        <img className={styles.frameChild31} alt="" src="/ellipse-26@2x.png" />
        <img className={styles.frameChild32} alt="" src="/ellipse-27@2x.png" />
        <img className={styles.frameChild33} alt="" src="/ellipse-28@2x.png" />
        <div className={styles.nidhi}>Nidhi</div>
        <div className={styles.viraj}>Viraj</div>
        <div className={styles.aayushi}>Aayushi</div>
        <div className={styles.jash}>Jash</div>
        <div className={styles.wantsToAdd}>wants to add you to friends.</div>
        <div className={styles.wantsToAdd2}>wants to add you to friends.</div>
        <div className={styles.wantsToAdd3}>wants to add you to friends.</div>
        <div className={styles.wantsToAdd4}>wants to add you to friends.</div>
        <div className={styles.frameChild34} />
        <div className={styles.frameChild35} />
        <b className={styles.decline}>Decline</b>
        <div className={styles.frameChild36} />
        <b className={styles.accept}>Accept</b>
        <div className={styles.frameChild37} />
        <b className={styles.decline1}>Decline</b>
        <div className={styles.frameChild38} />
        <b className={styles.accept1}>Accept</b>
        <div className={styles.frameChild39} />
        <b className={styles.decline2}>Decline</b>
        <div className={styles.frameChild40} />
        <b className={styles.accept2}>Accept</b>
        <div className={styles.frameChild41} />
        <b className={styles.decline3}>Decline</b>
        <b className={styles.accept3}>Accept</b>
        <img className={styles.frameChild42} alt="" src="/ellipse-29@2x.png" />
        <img className={styles.frameChild43} alt="" src="/ellipse-30@2x.png" />
        <img className={styles.frameChild44} alt="" src="/ellipse-31@2x.png" />
        <div className={styles.likes}>Likes</div>
        <img className={styles.frameChild45} alt="" src="/path-stroke.svg" />
        <div className={styles.likedYourPost}>liked your post</div>
        <div className={styles.harold}>Harold</div>
        <div className={styles.likedYourComment}>liked your comment</div>
        <div className={styles.nidhi1}>Nidhi</div>
        <div className={styles.likedYourStory}>liked your story</div>
        <div className={styles.james}>James</div>
        <div className={styles.frameChild46} />
        <div className={styles.like1}>like</div>
        <div className={styles.reply1}>reply</div>
        <div className={styles.frameChild47} />
        <div className={styles.like2}>like</div>
        <div className={styles.reply2}>reply</div>
      </div>
      <div className={styles.rectangleContainer} data-animate-on-scroll>
        <div className={styles.frameChild48} />
        <div className={styles.frameChild49} />
        <img className={styles.searchAltIcon} alt="" src="/searchalt1.svg" />
        <div className={styles.search}>Search</div>
        <div className={styles.div}>+</div>
      </div>
      <div className={styles.frameDiv} data-animate-on-scroll>
        <img
          className={styles.frameChild50}
          alt=""
          src="/rectangle-19@2x.png"
          data-animate-on-scroll
        />
        <img
          className={styles.frameChild51}
          alt=""
          src="/rectangle-20@2x.png"
          data-animate-on-scroll
        />
        <img
          className={styles.frameChild52}
          alt=""
          src="/rectangle-21@2x.png"
          data-animate-on-scroll
        />
        <img
          className={styles.frameChild53}
          alt=""
          src="/rectangle-22@2x.png"
          data-animate-on-scroll
        />
        <img
          className={styles.frameChild54}
          alt=""
          src="/rectangle-23@2x.png"
          data-animate-on-scroll
        />
        <img className={styles.frameChild55} alt="" src="/ellipse-20@2x.png" />
        <img className={styles.frameChild56} alt="" src="/ellipse-21@2x.png" />
        <img className={styles.frameChild57} alt="" src="/ellipse-22@2x.png" />
        <img className={styles.frameChild58} alt="" src="/ellipse-23@2x.png" />
        <img className={styles.frameChild59} alt="" src="/ellipse-24@2x.png" />
      </div>
    </div>
  );
};

export default Frame1;
