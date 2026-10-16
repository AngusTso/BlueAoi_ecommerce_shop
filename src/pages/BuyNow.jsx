import igLogo from "../assets/Instagram_Glyph_White.png";
import whatsappLogo from "../assets/Digital_Glyph_White.png";
import { chatOnWhatsApp, INSTAGRAM_URL, WHATSAPP_NUMBER } from "../utils/shop";
import usePageTitle from "../utils/usePageTitle";
import styles from "./BuyNow.module.css";

const BuyNow = () => {
  usePageTitle("How to Order");
  const waLink = chatOnWhatsApp();

  return (
    <div className={styles.buyNow}>
      <h1 className="sectionTitle">How to Order ♡</h1>
      <span className="bowDivider">🎀 ♡ 🎀</span>

      <div className={styles.cards}>
        <div className={`${styles.card} card`}>
          <h2>Contact</h2>
          <p>
            If you intend to purchase our product, you can DM us on Instagram or
            chat with us on WhatsApp — tap a button below and your message is
            already filled in for you.
          </p>
          <div className={styles.contactRow}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className={`${styles.contactBtn} ${styles.igBtn}`}
              title="DM us on Instagram"
            >
              <img src={igLogo} alt="" />
              Instagram
            </a>
            {WHATSAPP_NUMBER ? (
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className={`${styles.contactBtn} ${styles.waBtn}`}
                title="Chat with us on WhatsApp"
              >
                <img src={whatsappLogo} alt="" />
                WhatsApp
              </a>
            ) : (
              <span className={`${styles.contactBtn} ${styles.pending}`}>
                <img src={whatsappLogo} alt="" />
                WhatsApp · coming soon
              </span>
            )}
          </div>
        </div>

        <div className={`${styles.card} card`}>
          <h2>About shipping of your order</h2>
          <p>
            For the shipping of your item you can choose between{" "}
            <strong>SF express</strong> and <strong>Hk post service</strong>
          </p>
          <p>
            Depending on your country or zone, some shipping services may not be
            available.
          </p>
        </div>

        <div className={`${styles.card} card`}>
          <h2>Payment</h2>
          <p>
            After we confirm your order in chat, we&apos;ll send you a{" "}
            <strong>PayMe / FPS QR code</strong> — scan it and you&apos;re done!
          </p>
          <p>Easy, safe, and no account needed on this website.</p>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
