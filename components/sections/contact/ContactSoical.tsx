import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSnapchatGhost,
  faTiktok,
  faXTwitter,
  faGithub,
  faBehance,
  faDribbble,
  faPinterestP,
  faDiscord,
  faVk,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
export function ContactSoical() {
  return (
    <>
      <div className="links-container min-h-[100svh]  container-80">
        <a
          href="https://www.facebook.com/share/1DDmj1Rqw3/"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faFacebookF} />
          <span>Facebook</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://www.instagram.com/respect.agency.eg"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faInstagram} />
          <span>Instagram</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/company/respect-marketing-agency/"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
          <span>LinkedIn</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://www.snapchat.com/add/respect.agency"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faSnapchatGhost} />
          <span>Snapchat</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://www.tiktok.com/@respect.agency.eg?is_from_webapp=1&sender_device=pc"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faTiktok} />
          <span>TikTok</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://x.com/RespectAgency00"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faXTwitter} />
          <span>X (Twitter)</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://github.com/respect-agency"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://www.behance.net/respectagency1"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faBehance} />
          <span>Behance</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://dribbble.com/respect_agency_eg"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faDribbble} />
          <span>Dribbble</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://pin.it/URJwbDeL7"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faPinterestP} />
          <span>Pinterest</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="mailto:respect.ownerr@gmail.com"
          target="_blank"
          className="link-button"
        >
         <FontAwesomeIcon icon={faEnvelope} />
          <span>Gmail</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://discord.com/users/respect.00"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faDiscord} />
          <span>Discord</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="https://vk.com/id1095421607"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faVk} />
          <span>VK</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>

        <a
          href="http://t.me/respect_agency_eg"
          target="_blank"
          className="link-button"
        >
          <FontAwesomeIcon icon={faTelegram} />
          <span>Telegram</span>
          <div className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </a>
      </div>
    </>
  );
}
