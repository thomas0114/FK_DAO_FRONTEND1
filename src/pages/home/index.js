import React from "react";
import "./styles.scss";
import "../../components/styles_global.scss"

export default function Home() {
	return (
		<div className="home-container">
			<div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">VISION</div>
				{/* <div className="text-gradient-big text-subtitle">YOUR RUNWAY</div> */}
				<div className="text-content-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
					<br />
					aliquam erat volutpat.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
					<br />
					commodo consequat.
				</div>
			</div>
			<div className="text-wrapper1">
				<div className="text-gradient-big1 text-subtitle" style={{textAlign:'center'}}>HOW IT WORKS</div>
				<div style={{ display: "flex", flexWrap: "wrap",  textAlign:'center', justifyContent:'center'}} width="100%">
					<div style={{ marginTop:'30px' , marginLeft:"10%", marginRight:"10%"}}>
						<img src="./howitworks.png" alt="vector" className="vector-image" width="100%" height="100%"/>
					</div>
					<div className="text-content-gray" style={{ marginTop:'43px' }}>
						Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
						vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore .
						{/* FAITH TRIBE is built on three major key components to deliver an experience to designers, their supporters, fans, and buyers.
						<br /><br />
						FAITH TRIBE Coin -> Designer Studio -> Fashion Marketplace (DIAGRAM)
						<br /><br />
						The FAITH TRIBE Coin is a community coin that provides holders with the following benefits
						<br />
						<ul>
							<li>Access to the Studio and Marketplace.</li>
							<li>Exclusive access to special online and IRL events.</li>
							<li>Royalties and rewards to community members for contributions.</li>
							<li>As a currency to buy physical products at wholesale cost.</li>
						</ul>
						<br /><br />

						The Designer Studio enables designers to create new garment designs backed by NFT technology
						<br />
						<ul>
							<li>Designers & artists will work independently or collaboratively on their own designs or customize existing designs.</li>
							<li>Create a single or collection of DIGITALS with or without a PHYSICALS design twin.</li>
							<li>Mint digital and physical design assets, setting pricing, distribution rights, and royalty fees using a common NFT standard for encoding designs. </li>
							<li>Optionally crowdsource public contribution to co-own a design or a collection of designs.</li>
						</ul>
						<br /><br />

						The Fashion Marketplace enables designers to sell garment designs using Web 3.0 technology
						<br />
						<ul>
							<li>Sell product NFTs for digital and/or physical products.</li>
							<li>Participate in seasonal product drops that are coordinated by the community with votes on which designs are produced and distributed for sale through FAITH CONNEXION channels.</li>
							<li>Create ad-hoc drops for one off, limited production, and open ended production runs for sale by designers through their own distribution channels.</li>
						</ul> */}
					</div>
				</div>
			</div>
			{/* <div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">WHAT IS THE FAITH TRIBE COIN?</div>
				<div className="text-content-gray">The FAITH TRIBE coin represents membership in the FAITH TRIBE community and gives members rights to receive a share of the fees for transactions process throught the community funded technology platform built on Ethereum. Ownership of the coin provides members the ability to make decisions on use of the community treasury to ensure the success of the FAITH TRIBE platform.
					<br /><br />
					The community coin will be issued to reward contributors through active participation, as well airdropped to participants of the broader FAITH TRIBE ecosystem, in order to catalyze the alignment of incentives to pursue the FAITH TRIBE mission. Finally the community coin will always be redeemable for the purchase of digital and physical assets, at the base cost of producing the asset before any retail markup providing holders a guaranteed discount when they use the coin.
				</div>
			</div> */}
			<div className="text-wrapper">
				<div className="text-gradient-big2 text-subtitle" style={{textAlign:'right'}}>RESERVATION</div>
				<div className="text-content-gray" style={{marginTop:"30px"}}>To support the initial launch of the platform, the FAITH TRIBE coin is available now and can be reserved simply by depositing Ethereum into the community reservation smart contract. Click Connect Wallet to complete the process.
					<br /><br />
				</div>
				{/* <button className="button-blue-border">CONNECT WALLET</button> */}
			</div>
			{/* <div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">TEAM</div>
				<div className="text-content-gray">Something about the team here</div>
				<div className="team-member-list">
					<div className="team-member">
						<img src="/member1.png" alt="member1" />
						<div className="member-name">Albert Flores</div>
						<div className="text-content-gray">Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</div>
					</div>
					<div className="team-member">
						<img src="/member2.png" alt="member2" />
						<div className="member-name">Z</div>
						<div className="text-content-gray">Magna aliquam erat volutpat quis nostrud exerci tation ullamcorper.</div>
					</div>
					<div className="team-member">
						<img src="/member3.png" alt="member3" />
						<div className="member-name">Jane Cooper</div>
						<div className="text-content-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</div>
					</div>
					<div className="team-member">
						<img src="/member4.png" alt="member4" />
						<div className="member-name">Darrell Chung</div>
						<div className="text-content-gray">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</div>
					</div>
				</div>
			</div>
			<div className="text-wrapper">
				<div className="text-gradient-big text-subtitle">PARTNERS</div>
				<div className="text-content-gray">Something about the partners here</div>
				<div className="partner-list">
					<img src="/adidas.png" alt="adidas" />
					<img src="/supreme.png" alt="supreme" />
					<img src="/zara.png" alt="zara" />
					<img src="/lacoste.png" alt="lacoste" />
				</div>
			</div> */}
		</div>
	);
}
