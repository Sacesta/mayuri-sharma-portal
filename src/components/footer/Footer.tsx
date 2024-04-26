import React from 'react';
import '@/styles/footer.css';
import Image from 'next/image';
import footerLogo from '@/Assets/Images/pageImages/footer_logo.png';
import footerEllipse from '@/Assets/Images/pageImages/footer_ellipse.png';
import FooterNewsLetter from '../NewsLetters/FooterNewsLetter';
import flowerPetal from '@/Assets/svg/bannerFlower.svg';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container mx-auto xl:px-24 lg:gap-20">
          <div className="grid lg:grid-cols-5">
            <div>
              <div className="flex items-center mb-9">
                <div className="footer-logo">
                  <Image src={flowerPetal} alt="..." className="  h-20 w-40" />
                </div>
                {/* <span className="ml-4 text-white">
                  <svg
                    width="86"
                    height="25"
                    viewBox="0 0 86 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 19.0557V1.77637H2.71087L10.4635 14.3903H9.04469L16.6706 1.77637H19.3815L19.4068 19.0557H16.2906L16.2652 6.54052H16.924L10.4381 17.0809H8.96869L2.38152 6.54052H3.14157V19.0557H0Z"
                      fill="white"
                    />
                    <path
                      d="M32.2284 19.0557V16.3897L32.0511 15.822V11.1566C32.0511 10.2515 31.7724 9.55206 31.215 9.05837C30.6577 8.54822 29.8131 8.29314 28.6815 8.29314C27.9214 8.29314 27.1698 8.40834 26.4267 8.63873C25.7004 8.86912 25.0839 9.19002 24.5772 9.60143L23.3358 7.35512C24.062 6.81206 24.9234 6.40887 25.92 6.14557C26.9334 5.86581 27.9806 5.72593 29.0615 5.72593C31.0208 5.72593 32.5325 6.18671 33.5966 7.10827C34.6775 8.01338 35.218 9.42041 35.218 11.3294V19.0557H32.2284ZM27.9721 19.2285C26.9587 19.2285 26.072 19.0639 25.3119 18.7348C24.5519 18.3892 23.9607 17.9202 23.5384 17.3278C23.1331 16.7189 22.9304 16.0359 22.9304 15.2789C22.9304 14.5384 23.1077 13.8719 23.4624 13.2795C23.834 12.687 24.4336 12.218 25.2612 11.8724C26.0889 11.5268 27.1867 11.3541 28.5548 11.3541H32.4818V13.4029H28.7828C27.7019 13.4029 26.9756 13.5757 26.604 13.9213C26.2324 14.2504 26.0466 14.6618 26.0466 15.1555C26.0466 15.715 26.2747 16.1593 26.7307 16.4885C27.1867 16.8176 27.8201 16.9822 28.6308 16.9822C29.4078 16.9822 30.1003 16.8094 30.7083 16.4638C31.3333 16.1182 31.7809 15.6081 32.0511 14.9333L32.5831 16.7847C32.2791 17.5582 31.7302 18.1588 30.9363 18.5867C30.1594 19.0146 29.1713 19.2285 27.9721 19.2285Z"
                      fill="white"
                    />
                    <path
                      d="M40.1497 24.0173C39.491 24.0173 38.8322 23.9104 38.1735 23.6964C37.5148 23.4825 36.9659 23.1863 36.5267 22.8078L37.7935 20.5368C38.1144 20.8165 38.4775 21.0387 38.8829 21.2033C39.2883 21.3678 39.7021 21.4501 40.1243 21.4501C40.6986 21.4501 41.1631 21.3102 41.5178 21.0305C41.8725 20.7507 42.2018 20.2817 42.5059 19.6234L43.2912 17.8955L43.5446 17.5252L48.6623 5.87404H51.7026L45.3687 20.1171C44.9465 21.1045 44.4736 21.8862 43.95 22.4622C43.4433 23.0382 42.869 23.4413 42.2272 23.6717C41.6022 23.9021 40.9097 24.0173 40.1497 24.0173ZM42.9366 19.5247L36.8308 5.87404H40.1243L45.0901 17.2537L42.9366 19.5247Z"
                      fill="white"
                    />
                    <path
                      d="M59.4076 19.2285C58.2591 19.2285 57.2457 19.0228 56.3674 18.6114C55.4891 18.1835 54.8051 17.5417 54.3153 16.686C53.8254 15.8138 53.5805 14.7194 53.5805 13.4029V5.87404H56.7474V12.9832C56.7474 14.1681 57.0177 15.0568 57.5582 15.6492C58.1155 16.2252 58.9009 16.5132 59.9144 16.5132C60.6575 16.5132 61.2993 16.3651 61.8398 16.0688C62.3972 15.7726 62.8279 15.3283 63.1319 14.7359C63.4528 14.1434 63.6133 13.4111 63.6133 12.5389V5.87404H66.7802V19.0557H63.7653V15.5011L64.2974 16.5872C63.8413 17.443 63.1742 18.1012 62.2959 18.562C61.4176 19.0063 60.4548 19.2285 59.4076 19.2285Z"
                      fill="white"
                    />
                    <path
                      d="M70.9267 19.0557V5.87404H73.9416V9.50269L73.5869 8.44125C73.9923 7.5526 74.6256 6.87788 75.487 6.4171C76.3653 5.95632 77.4547 5.72593 78.7553 5.72593V8.66341C78.6202 8.6305 78.4935 8.61404 78.3753 8.61404C78.257 8.59759 78.1388 8.58936 78.0206 8.58936C76.8214 8.58936 75.8671 8.93495 75.1577 9.62612C74.4483 10.3008 74.0936 11.3129 74.0936 12.6623V19.0557H70.9267Z"
                      fill="white"
                    />
                    <path
                      d="M81.4418 19.0557V5.87404H84.6087V19.0557H81.4418Z"
                      fill="white"
                    />
                    <path
                      d="M81.2526 3.87732C81.6995 4.32159 82.263 4.54373 82.9431 4.54373C83.6426 4.54373 84.2061 4.32159 84.6336 3.87732C85.0611 3.41285 85.2748 2.8474 85.2748 2.18099C85.2748 1.55497 85.0513 1.04001 84.6044 0.636121C84.1769 0.21204 83.6231 0 82.9431 0C82.263 0 81.6995 0.222138 81.2526 0.666413C80.8251 1.09049 80.6113 1.62565 80.6113 2.27187C80.6113 2.89789 80.8251 3.43304 81.2526 3.87732Z"
                      fill="#EB334A"
                    />
                  </svg>
                </span> */}
              </div>
              <ul className="social_media_icon">
                <li>
                  <a href="">
                    <svg
                      width="7"
                      height="14"
                      viewBox="0 0 7 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.78694 14V7.43079H0V5.06556H1.78694V3.04535C1.78694 1.45785 2.84249 0 5.27471 0C6.25947 0 6.98766 0.09177 6.98766 0.09177L6.93028 2.30049C6.93028 2.30049 6.18765 2.29347 5.37725 2.29347C4.50015 2.29347 4.35963 2.68638 4.35963 3.33851V5.06556H7L6.88512 7.43079H4.35963V14H1.78694Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.334 1.70441C17.66 1.98888 16.945 2.17561 16.2129 2.25838C16.9755 1.82297 17.561 1.13349 17.8367 0.311979C17.1118 0.721787 16.3187 1.01052 15.4917 1.16571C14.818 0.481989 13.8583 0.0546875 12.7961 0.0546875C10.7566 0.0546875 9.10308 1.62992 9.10308 3.57277C9.10308 3.84855 9.13577 4.11703 9.1987 4.37459C6.12956 4.22782 3.40847 2.82722 1.58702 0.698687C1.26921 1.21829 1.0871 1.82271 1.0871 2.46738C1.0871 3.68799 1.73911 4.76478 2.72995 5.39572C2.14351 5.37822 1.56997 5.22732 1.05722 4.95562C1.05701 4.97036 1.05701 4.9851 1.05701 4.9999C1.05701 6.70448 2.32995 8.12645 4.01927 8.44966C3.47547 8.59056 2.90505 8.61118 2.3516 8.50995C2.8215 9.90767 4.18535 10.9248 5.80127 10.9532C4.53741 11.8968 2.94504 12.4593 1.21493 12.4593C0.916805 12.4593 0.622898 12.4426 0.333984 12.4101C1.96826 13.4083 3.90938 13.9908 5.99484 13.9908C12.7875 13.9908 16.5019 8.62985 16.5019 3.98078C16.5019 3.82819 16.4984 3.67647 16.4912 3.52561C17.2142 3.0277 17.8382 2.41098 18.334 1.70441Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.2987 15V4.87953H0.868402V15H4.2987ZM2.584 3.49692C3.7802 3.49692 4.52478 2.71978 4.52478 1.74862C4.5025 0.755565 3.78025 0 2.6067 0C1.43333 0 0.666016 0.75558 0.666016 1.74862C0.666016 2.71983 1.41041 3.49692 2.5616 3.49692H2.58389H2.584ZM6.19737 15H9.62767V9.34824C9.62767 9.04576 9.64995 8.7436 9.74054 8.52738C9.98852 7.92304 10.5529 7.29712 11.5005 7.29712C12.7418 7.29712 13.2384 8.2252 13.2384 9.5857V14.9999H16.6685V9.19695C16.6685 6.08834 14.9762 4.64193 12.7192 4.64193C10.8687 4.64193 10.0562 5.65626 9.60485 6.34712H9.62774V4.87932H6.19744C6.24246 5.82897 6.19744 14.9998 6.19744 14.9998L6.19737 15Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00234 3.95732C5.73091 3.95732 3.89877 5.76084 3.89877 7.99677C3.89877 10.2327 5.73091 12.0362 8.00234 12.0362C10.2738 12.0362 12.1059 10.2327 12.1059 7.99677C12.1059 5.76084 10.2738 3.95732 8.00234 3.95732ZM8.00234 10.6229C6.53448 10.6229 5.33448 9.44521 5.33448 7.99677C5.33448 6.54834 6.53091 5.3706 8.00234 5.3706C9.47377 5.3706 10.6702 6.54834 10.6702 7.99677C10.6702 9.44521 9.47019 10.6229 8.00234 10.6229ZM13.2309 3.79209C13.2309 4.31592 12.8023 4.73428 12.2738 4.73428C11.7416 4.73428 11.3166 4.3124 11.3166 3.79209C11.3166 3.27178 11.7452 2.8499 12.2738 2.8499C12.8023 2.8499 13.2309 3.27178 13.2309 3.79209ZM15.9488 4.74834C15.888 3.48623 15.5952 2.36826 14.6559 1.44717C13.7202 0.526074 12.5845 0.237793 11.3023 0.174512C9.98091 0.100684 6.0202 0.100684 4.69877 0.174512C3.4202 0.234277 2.28449 0.522558 1.3452 1.44365C0.405915 2.36474 0.116629 3.48271 0.0523437 4.74482C-0.0226562 6.0456 -0.0226562 9.94443 0.0523437 11.2452C0.113058 12.5073 0.405915 13.6253 1.3452 14.5464C2.28449 15.4675 3.41663 15.7558 4.69877 15.819C6.0202 15.8929 9.98091 15.8929 11.3023 15.819C12.5845 15.7593 13.7202 15.471 14.6559 14.5464C15.5916 13.6253 15.8845 12.5073 15.9488 11.2452C16.0238 9.94443 16.0238 6.04912 15.9488 4.74834ZM14.2416 12.6409C13.963 13.33 13.4238 13.8608 12.7202 14.1386C11.6666 14.5499 9.16662 14.455 8.00234 14.455C6.83805 14.455 4.33448 14.5464 3.28448 14.1386C2.58448 13.8643 2.0452 13.3335 1.76306 12.6409C1.3452 11.6038 1.44163 9.14287 1.44163 7.99677C1.44163 6.85068 1.34877 4.38623 1.76306 3.35263C2.04163 2.66357 2.58091 2.13271 3.28448 1.85498C4.33806 1.44365 6.83805 1.53857 8.00234 1.53857C9.16662 1.53857 11.6702 1.44717 12.7202 1.85498C13.4202 2.1292 13.9595 2.66006 14.2416 3.35263C14.6595 4.38974 14.563 6.85068 14.563 7.99677C14.563 9.14287 14.6595 11.6073 14.2416 12.6409Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:pr-24 mb-8 lg:mb-0">
              <div className="flex">
                <div className="mr-[77px]">
                  <p className="mb-9 font-semibold text-white text-[21px]">
                    Pages
                  </p>
                  <ul className="footer_links">
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About Me</a>
                    </li>
                    <li>
                      <a href="">My Content</a>
                    </li>
                    <li>
                      <a href="">Join a Challenge</a>
                    </li>
                    <li>
                      <a href="">Free Resources</a>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <p className="mb-9 font-semibold text-white text-[21px]">
                    Pages
                  </p>
                  <ul className="footer_links">
                    <li>
                      <a href="">Resources</a>
                    </li>
                    <li>
                      <a href="">Resources</a>
                    </li>
                    <li>
                      <a href="">Resources</a>
                    </li>
                    <li>
                      <a href="">Resources</a>
                    </li>
                    <li>
                      <a href="">Resources</a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <p className="text-base font-normal text-white mt-24 hidden lg:block copyright_text">
                © 2023 All rights reserved Mayuri Sharma
              </p>
            </div>
            {/* <FooterNewsLetter /> */}
          </div>
          <p className="text-base font-normal text-white mt-16 text-center block lg:hidden copyright_text">
            © 2023 All rights reserved Mayuri Sharma
          </p>
        </div>
        <Image
          className="main-right-circle hidden lg:block"
          src={footerEllipse}
          alt=".."
        />
      </footer>
    </div>
  );
};

export default Footer;
