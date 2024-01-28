import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { TbBallpen } from "react-icons/tb";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  return (
    <section>
      <div className="social">
        <h4>My Socials</h4>
        <a href="https://www.behance.net/victorsegovia1">
          <FaBehance />
        </a>
        <a href="https://github.com/victorsegovi">
          <FaGithub />
        </a>
        <a href="https://twitter.com/TuripeVictor">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/victorsegoviat/">
          <FaInstagramSquare />
        </a>
      </div>
      <div className="ws">
        <h2>Let's get in touch!</h2>
        <a href="https://wa.me/584144175655">
          <FaWhatsapp /> Send me a message!
        </a>
      </div>
      <form action="">
        <div className="name">
          <label value="name"><IoPersonOutline></IoPersonOutline> Name
          </label>
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="email">
          <label value="email"><FaRegEnvelope></FaRegEnvelope> Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="message">
          <label value="message"><TbBallpen></TbBallpen> Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button>
            Send Message <IoSend></IoSend>
          </button>
        </div>
      </form>
    </section>
  );
}
