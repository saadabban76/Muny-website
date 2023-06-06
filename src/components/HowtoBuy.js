import React from "react";
import Htblocks from "./Htblocks";
import { Fade } from "react-reveal";

const HowtoBuy = () => {
  return (
    <div id="howtobuy" className="p-20">
      <h1
        className="mb-16
      text-center text-4xl font-bold sm:text-5xl"
      >
        How to Buy
      </h1>
      <div
        className="mx-auto flex flex-col gap-5
      sm:max-w-[1200px]"
      >
        <Fade left>
          <Htblocks
            src="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T212906_738.png"
            title="create a wallet"
            description="download metamask or your wallet of choice from the app store or google play store for free. Desktop 
          users, download the google chrome extension by going to metamask.io."
          />
        </Fade>

        <Fade right>
          <Htblocks
            src="https://static.wixstatic.com/media/1f3f2b_48f30828b7d740d98efb1a2f8febc010~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T213620_680.png"
            title="get some eth"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id facilis pariatur blanditiis
           magni debitis dolorem error quidem, eaque nemo?"
          />
        </Fade>

        <Fade left>
          <Htblocks
            src="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/uniswap%20(2).png"
            title="go to uniswap/metamask"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum accusamus, modi eveniet facilis dolore voluptates vero deserunt libero! 
          Accusamus saepe est corrupti beatae iure dolore tempore omnis cum?"
          />
        </Fade>
        <Fade right>
          <Htblocks
            src="https://static.wixstatic.com/media/1f3f2b_04aca37507ff420d94bd45bde7547fcc~mv2.png/v1/fill/w_241,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T215146_874.png"
            title="swap eth for $Muny"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Amet illum accusamus, modi eveniet facilis dolore voluptates "
          />
        </Fade>
      </div>
    </div>
  );
};

export default HowtoBuy;
