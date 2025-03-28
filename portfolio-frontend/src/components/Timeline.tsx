import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  const { t } = useTranslation();
  console.log(t("experience.primezone.title"));
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024-Oct - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experience.apitech.manager.title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("experience.apitech.manager.subTitle")}
            </h4>
            <p>{t("experience.apitech.manager.description")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2023-Août - 2024-Oct"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experience.apitech.leadDev.title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("experience.apitech.leadDev.subTitle")}
            </h4>
            <p>{t("experience.apitech.leadDev.description")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022-Nov - 2023-Août"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experience.apitech.dev.title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("experience.apitech.dev.subTitle")}
            </h4>
            <p>{t("experience.apitech.dev.description")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022-Mai - 2023-Nov"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experience.fraisy.title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("experience.fraisy.subTitle")}
            </h4>
            <p>{t("experience.fraisy.description")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-Juin - 2022-Mai"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experience.primezone.title")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("experience.primezone.subTitle")}
            </h4>
            <p>{t("experience.primezone.description")}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
