import React, { useEffect, useState } from "react";
import { Box, Modal } from '@material-ui/core'
import { MdClose } from 'react-icons/md'
import "../../styles_global.scss";
import styled from 'styled-components'
import "./styles.scss";
import WalletModel from "../../wallet_modal";
import {
	injected,
	walletConnect,
	trustWallet,
	binance_wallet,
	walletlink,
} from "../../../utils/connectors";
import { useWeb3React } from '@web3-react/core'
import Fortmatic from "fortmatic"
import Web3 from "web3";
import Portis from "@portis/web3";

import metamask from "../../../assets/wallet_icons/metamask.png";
import walletconnect from "../../../assets/wallet_icons/walletconnect.png";
import coinbase from "../../../assets/wallet_icons/coinbase.png";
import fortmatic from "../../../assets/wallet_icons/fortmatic.png";
import portis from "../../../assets/wallet_icons/portis.png";

export default function Header({ flag_con_wallet, set_con_wallet }) {
	const FORMATIC_API_KEY = "pk_live_9613401E26B091DA";
	// const FORTMATIC_KEY = "pk_test_8F16BED4B4CD6116" // for FORTMATIC testing
	// const PORTIS_ID = "1de60dd1-e77a-4efa-9278-93319070fef9" //https://dashboard.portis.io/

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const { web3Loading, getweb3 } = WalletModel()
	const [wallet, set_wallet] = useState([true, true, true, true, true]);
	const [flag_connect, set_connect] = useState(0);
	// const [modalShow, setModalShow] = useState("none")
	// const [wallet_loading, set_loading] = useState(false);

	const DESKTOP_CONNECTORS = {
		MetaMask: injected,
		WalletConnect: walletConnect,
		BinanceWallet: binance_wallet,
		TrustWallet: trustWallet,
		Coinbase: walletlink,
	};
	// const MOBILE_CONNECTORS = {
	// 	MetaMask: injected,
	// 	TrustWallet: trustWallet,
	// 	BinanceWallet: binance_wallet,
	// };

	const walletConnectors = DESKTOP_CONNECTORS;
	const { activate, deactivate } = useWeb3React();

	const [wallet_address, set_address] = useState('RESERVE NOW');

	const connectformatic = async () => {
		const fm = new Fortmatic(FORMATIC_API_KEY);
		let web3 = new Web3(fm.getProvider());
		const accounts = await web3.eth.getAccounts();
		console.log(accounts);
	};

	const connect_portis = async () => {
		const portis = new Portis('93b768a1-12b2-4c87-be0f-ed7314f7a856', 'mainnet');
		// const web3 = new Web3(portis.provider);
		const accounts = await portis.provider.enable();
		console.log(accounts);
	}

	const connectWallet1 = (currentConnector) => {
		activate(currentConnector);
	}

	async function connectWallet() {
		if (web3Loading) {
			set_connect(1);
		}
		await getweb3().then((response) => {
			set_con_wallet(true);
			set_connect(2);
			handleClose();
			set_wallet([true, true, true, true, true]);

			response.eth.getAccounts().then((result) => {
				set_address(result[0].toString());
				response.eth.getBalance(result[0]).then((result) => {
					console.log('balance:', parseFloat(result).toFixed(1))
				})
			});
		});
	}

	const disconnect = async () => {
		deactivate();
		set_connect(0);
		set_con_wallet(false);
		// await window.ethereum.request({
		// 	method: "wallet_requestPermissions",
		// 	params: [
		// 	  {
		// 		eth_accounts: {}
		// 	  }
		// 	]
		//   });
	}

	const style1 = {
		display: "flex",
		flexDirection: 'column',
		alignItems: 'center',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '40%',
		boxShadow: 30,
	};

	const style2 = {
		display: "flex",
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#2DAFB2',
		justifyContent: 'center',

	};

	useEffect(() => {

	})

	return (
		<div className="header-wrapper" id="header-wrapper">
			<div id="header-title">
				<div className="header-text">FAITH CONNEXION&nbsp;</div>
				<div className="header-text text-gradient">TRIBE</div>
			</div>
			<div className="connect-button-wrapper">
				<>
					{
						flag_connect === 0 ? <button className="button-blue-border" onClick={() => { handleOpen() }}>RESERVE NOW</button> :
							flag_connect === 1 ? <button className="button-blue-border" >LOADING...</button> :
								flag_connect === 2 ? <><button className="button-blue-border" style={{ marginRight: '2%' }} >3.0 FAITH Reserved</button> <button className="button-blue-border" style={{ marginRight: '2%' }} onClick={() => { disconnect(); }}>{wallet_address.slice(0, 6) + "..." + wallet_address.slice(wallet_address.length - 5, wallet_address.length - 1)}</button><button className="button-blue-border" >...</button></> : ''
					}
				</>
			</div>

			<Modal
				open={open}
				// onClose={handleClose}  // disable backdrop
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				style={{
					backdropFilter: 'blur(10px)'
				}}
			>
				<Connectwallet1 sx={style1}>
					<Box display="flex" justifyContent="center" marginBottom="2%" fontSize="72px" lineHeight="72px" fontWeight="200" sx={{
						'background': 'linear-gradient(150deg,  #E4CB6F 20%,#DB5994 50% ,#7735BD 60%)',
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent'
					}}>RESERVE</Box>
					<Box sx={style2}>
						<Box display="flex" flex="1" flexDirection="column" width="100%">
							<Box display="flex" fontSize='24px' fontWeight='bold' color='white' lineHeight='28px' marginTop="2%" justifyContent="flex-end" marginRight="2%"
								onClick={() => {
									set_connect(0);
									handleClose();
									set_wallet([true, true, true, true, true]);
									set_con_wallet(false);
								}}><MdClose fontSize="24px" color="white"></MdClose></Box>
							<Letterconnect display="flex" fontSize='24px' color='white' lineHeight='28px' justifyContent="center" marginTop="2%" >CONNECT TO A WALLET</Letterconnect>
							<Letterwallet display="flex" fontSize='16px' lineHeight='19px' flexDirection="column" marginTop="2%">
								<Box display="flex" flex="1" justifyContent="center" fontSize="16px" lineHeight="19px" color="black" fontWeight="bold">By connecting a wallet, you agree to Faith Connexion’s</Box>
								<Box display="flex" flex="1" justifyContent="center" fontSize="16px" lineHeight="19px" color="black" fontWeight="bold"><Box color="white" style={{ textDecoration: 'underline' }}>Terms of Service</Box>{'\u00a0'} and acknowledge that you have read and </Box>
								<Box display="flex" flex="1" justifyContent="center" fontSize="16px" lineHeight="19px" color="black" fontWeight="bold">understand the {'\u00a0'} <Box color="white" style={{ textDecoration: 'underline' }}>FAITH TRIBE protocol disclaimer.</Box></Box>
							</Letterwallet>
						</Box>
						<Box display="flex" flex="4" flexDirection="column" width="100%" marginTop="10%" marginBottom="10%" alignItems="center" justifyContent="center">
							<Meta display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet0={wallet[0]?1:0} >
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([true, false, false, false, false]);
									connectWallet();
									set_connect(1);
								}} >
									<img src={metamask} width="40px" height="40px" alt=""></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>METAMASK</Box>
									{flag_connect === 0 ? '' : <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Initializing...</Box>}
								</Box>
							</Meta>
							<Wallet display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet1={wallet[1]?1:0}>
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([false, true, false, false, false]);
									connectWallet1(walletConnectors['WalletConnect']);
									set_connect(1);
								}} >
									<img src={walletconnect} width="40px" height="40px" alt=""></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>WALLETCONNECT</Box>
									{flag_connect === 0 ? '' : <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Initializing...</Box>}
								</Box>
							</Wallet>
							<Coin display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet2={wallet[2]?1:0}>
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([false, false, true, false, false]);
									connectWallet1(walletConnectors['Coinbase']);
									set_connect(1);
								}}  >
									<img src={coinbase} width="40px" height="40px" alt=""></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>COINBASE</Box>
									{flag_connect === 0 ? '' : <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Initializing...</Box>}
								</Box>
							</Coin>
							<Fort display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet3={wallet[3]?1:0}>
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([false, false, false, true, false]);
									connectformatic();
									set_connect(1);
								}} >
									<img src={fortmatic} width="40px" height="40px" alt=""></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>FORTMATIC</Box>
									{flag_connect === 0 ? '' : <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Initializing...</Box>}
								</Box>
							</Fort>
							<Port display='flex' width="80%" flex='1' marginTop="1%" marginBottom="1%" wallet4={wallet[4]?1:0}>
								<Box sx={{
									cursor: 'pointer',
									display: 'flex',
									transition: 'ease-out 0.4s',
									alignItems: 'center',
									border: '1px solid white',
									width: "100%",
									boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
									paddingLeft: '10%',
									height: 65
								}} onClick={() => {
									set_wallet([false, false, false, false, true]);
									connect_portis();
									set_connect(1);
								}} >
									<img src={portis} width="40px" height="40px" alt=""></img><Box fontWeight='bold' marginLeft='10%' color='white' fontSize='16px'>PORTIS</Box>
									{flag_connect === 0 ? '' : <Box fontWeight='bold' marginLeft='15%' color='white' fontSize='16px'>Initializing...</Box>}
								</Box>
							</Port>

						</Box>
					</Box>
				</Connectwallet1>
			</Modal>
			{/* <div className="wallet-result-modal" id="modal">
				<h1>RESERVE FAITH TOKEN</h1>
				<div className="balance-card">
					<div className="balance-card-row">
						<div className="balance-title"><img src="/icon-ETH.svg" alt="ETH Icon" /><span>ETH</span></div>
						<div className="balance-value">0.0</div>
					</div>
					<div className="balance-card-row">
						<div><span className="balance-max">Balance: 21.33ETH</span><span>(MAX)</span></div>
					</div>
					<img src="/icon-exchange.svg" alt="Exchange Icon" className="icon-exchange" />
				</div>
				<div className="balance-card">
					<div className="balance-card-row">
						<div className="balance-title"><img src="/icon-FAITH.svg" alt="FAITH TOKEN Icon" /><span>FAITH TOKEN</span></div>
					</div>
				</div>
				<div className="button-wrapper">
					<button className="white-simple-button">RESERVE</button>
				</div>
				<div className="price-list">
					<span>Price tolarance</span><span>1%</span>
				</div>
				<div className="price-list">
					<span>Gas Price</span><span>1 GWI</span>
				</div>
				<div className="price-list">
					<span>Token Price</span><span>1ETH = 10FAITH</span>
				</div>
				<button className="button-close" onClick={() => setModalShow("none")}><img src="/btn-close.svg" alt="close button" /></button>
			</div> */}
		</div>
	);
}

const Connectwallet1 = styled(Box)`

	@media (max-width: 800px) {
		width: 60% !important;
	}
	@media (max-width: 600px) {
		width: 70% !important;
	}
	@media (max-width: 500px) {
		width: 80% !important;
	}
	@media (max-width: 400px) {
		width: 90% !important;
	}
`

const Letterconnect = styled(Box)`
	@media (max-width: 1000px) {
		font-size: 22px !important;
	}
	@media (max-width: 800px) {
		font-size: 20px !important;
	}
	@media (max-width: 600px) {
		font-size: 18px !important;
	}
	@media (max-width: 400px) {
		font-size: 15px !important;
	}
`

const Letterwallet = styled(Box)`
	@media (max-width: 1140px) {
		display: none !important;
	}

`

const Meta = styled(Box)`
	display: ${({ wallet0 }) => wallet0 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Wallet = styled(Box)`
display: ${({ wallet1 }) => wallet1 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Coin = styled(Box)`
display: ${({ wallet2 }) => wallet2 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Fort = styled(Box)`
display: ${({ wallet3 }) => wallet3 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
const Port = styled(Box)`
display: ${({ wallet4 }) => wallet4 ? 'flex !important' : 'none !important'};
	width: 80%;
	flex: 1;
	margin-top : 1%;
	margin-bottom: 1%;
`
