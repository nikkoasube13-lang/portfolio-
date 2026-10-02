* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
  color: #172033;
}

button {
  font-family: inherit;
  cursor: pointer;
}

.app {
  width: 100%;
  overflow-x: hidden;
}

/* =========================
   NAVBAR
========================= */

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid #e5e7eb;
}

.nav-container {
  max-width: 1150px;
  margin: auto;
  padding: 18px 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo {
  color: #1769e0;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links button {
  border: none;
  background: transparent;
  color: #344054;
  padding: 9px 13px;
  border-radius: 8px;
  font-size: 14px;
  transition: 0.2s;
}

.nav-links button:hover {
  background: #eaf3ff;
  color: #1769e0;
}

/* =========================
   HERO
========================= */

.hero {
  min-height: 650px;
  padding: 100px 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    linear-gradient(
      135deg,
      #eaf3ff 0%,
      #ffffff 50%,
      #dcecff 100%
    );
}

.hero-content {
  max-width: 850px;
  text-align: center;
}

.hero-small {
  color: #1769e0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 62px;
  line-height: 1.1;
  color: #172033;
  margin-bottom: 25px;
}

.hero h1 span {
  display: block;
  color: #1769e0;
}

.hero-text {
  max-width: 650px;
  margin: auto;
  color: #667085;
  font-size: 18px;
  line-height: 1.7;
}

.hero-buttons {
  margin-top: 35px;

  display: flex;
  justify-content: center;
  gap: 12px;
}

.primary-btn,
.secondary-btn {
  padding: 13px 23px;
  border-radius: 9px;
  font-size: 15px;
  font-weight: bold;
  transition: 0.2s;
}

.primary-btn {
  border: 2px solid #1769e0;
  background: #1769e0;
  color: white;
}

.primary-btn:hover {
  background: #0d55bc;
}

.secondary-btn {
  border: 2px solid #1769e0;
  background: white;
  color: #1769e0;
}

.secondary-btn:hover {
  background: #eaf3ff;
}

/* =========================
   GENERAL SECTION
========================= */

.section {
  max-width: 1150px;
  margin: auto;
  padding: 90px 25px;
}

.section-title {
  text-align: center;
  margin-bottom: 45px;
}

.section-title p {
  color: #1769e0;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.section-title h2 {
  font-size: 38px;
  color: #172033;
}

.section-title span {
  display: block;
  width: 55px;
  height: 4px;
  background: #1769e0;
  border-radius: 10px;
  margin: 15px auto 0;
}

/* =========================
   ABOUT
========================= */

.about-card {
  max-width: 850px;
  margin: auto;

  padding: 35px;

  display: flex;
  align-items: flex-start;
  gap: 25px;

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 18px;

  box-shadow: 0 10px 30px rgba(23, 105, 224, 0.08);
}

.about-icon {
  min-width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #1769e0;
  color: white;

  border-radius: 15px;
  font-size: 25px;
}

.about-card h3 {
  font-size: 24px;
  margin-bottom: 12px;
}

.about-card p {
  color: #667085;
  line-height: 1.7;
  margin-bottom: 10px;
}

/* =========================
   MEMBERS
========================= */

.members-section {
  max-width: 1200px;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.member-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);

  transition: transform 0.2s, box-shadow 0.2s;
}

.member-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(23, 105, 224, 0.13);
}

/* SMALLER MEMBER IMAGE */

.member-image {
  width: 100%;
  height: 210px;
  overflow: hidden;
  background: #eaf3ff;
}

.member-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}

.member-info {
  padding: 22px;
}

.member-role {
  color: #1769e0;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 7px;
}

.member-info h3 {
  font-size: 21px;
  margin-bottom: 10px;
}

.member-description {
  color: #667085;
  font-size: 14px;
  line-height: 1.6;
  min-height: 68px;
}

.profile-btn {
  width: 100%;
  margin-top: 18px;

  padding: 11px;

  border: none;
  border-radius: 8px;

  background: #1769e0;
  color: white;

  font-weight: bold;
}

.profile-btn:hover {
  background: #0d55bc;
}

/* =========================
   INFORMATION
========================= */

.information-section {
  max-width: 1200px;
  background: #f8fbff;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.info-card {
  padding: 30px;

  background: white;

  border: 1px solid #e5e7eb;
  border-radius: 15px;

  transition: 0.2s;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: #1769e0;
}

.info-number {
  color: #1769e0;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
}

.info-card h3 {
  font-size: 23px;
  margin-bottom: 12px;
}

.info-card p {
  color: #667085;
  line-height: 1.7;
}

/* =========================
   PICTURES
========================= */

.picture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.picture-card {
  position: relative;

  height: 260px;

  overflow: hidden;
  border-radius: 15px;

  background: #eaf3ff;
}

.picture-card img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition: transform 0.3s;
}

.picture-card:hover img {
  transform: scale(1.05);
}

.picture-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 15px;

  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.75)
  );

  color: white;
  font-weight: bold;
}

/* =========================
   FOOTER
========================= */

.footer {
  padding: 45px 25px;
  text-align: center;

  background: #172033;
  color: white;
}

.footer h2 {
  margin-bottom: 10px;
}

.footer p {
  color: #b9c3d4;
  margin-bottom: 20px;
}

.footer small {
  color: #8e9aae;
}

/* =========================
   MODAL
========================= */

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.65);
}

.modal {
  position: relative;

  width: 100%;
  max-width: 430px;

  padding: 30px;

  text-align: center;

  background: white;
  border-radius: 18px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.modal > img {
  width: 130px;
  height: 130px;

  object-fit: cover;

  border-radius: 50%;

  border: 5px solid #eaf3ff;

  margin-bottom: 15px;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 15px;

  width: 35px;
  height: 35px;

  border: none;
  border-radius: 50%;

  background: #f2f4f7;

  color: #344054;

  font-size: 24px;
}

.modal-role {
  color: #1769e0;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 7px;
}

.modal h2 {
  margin-bottom: 12px;
}

.modal p {
  color: #667085;
  line-height: 1.6;
}

.modal-btn {
  margin-top: 20px;

  padding: 10px 25px;

  border: none;
  border-radius: 8px;

  background: #1769e0;
  color: white;

  font-weight: bold;
}

/* =========================
   MOBILE
========================= */

@media (max-width: 850px) {

  .nav-container {
    flex-direction: column;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    min-height: 600px;
  }

  .hero h1 {
    font-size: 45px;
  }

  .members-grid,
  .info-grid,
  .picture-grid {
    grid-template-columns: 1fr;
  }

  .member-image {
    height: 230px;
  }
}

@media (max-width: 550px) {

  .nav-container {
    padding: 15px;
  }

  .nav-links {
    gap: 2px;
  }

  .nav-links button {
    padding: 7px 8px;
    font-size: 12px;
  }

  .hero {
    padding: 70px 20px;
  }

  .hero h1 {
    font-size: 37px;
  }

  .hero-text {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .section {
    padding: 65px 18px;
  }

  .section-title h2 {
    font-size: 30px;
  }

  .about-card {
    flex-direction: column;
    padding: 25px;
  }

  .member-image {
    height: 220px;
  }

  .picture-card {
    height: 230px;
  }
}