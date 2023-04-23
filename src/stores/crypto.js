import { defineStore } from 'pinia'
import Web3 from 'web3'
import TestSMCABI from '../abi/testsmc-abi.json'
import BQKTokenABI from '../abi/bqktoken-abi.json'
import NFTTokenABI from '../abi/nft-abi.json'


export const useCryptoStore = defineStore('cryptoStore', {
    state: () => {
        return {
            account: '',
            balance: '',
            loading: false,
            web3: null,
            TestSMCContract: null,
            BQKTokenContract: null,
            NFTTokenContract: null,
            TestSMCContractAddress: '0x3eD53CD7197C5eb9d3157101620384139d74CED3',
            BQKTokenContractAddress: '0x82e07ff4b6d756f0537D4B09f3b722c249296C04',
            NFTTokenContractAddress: '0x623FDdb7FB8cB703b1bCD3ba33A809CFCe8BAc52',
            // NFT
            totalSupply: null,

        }
    },
    actions: {
        initSMCContract() {
            // Instantiate the smart contract object
            this.TestSMCContract = new this.web3.eth.Contract(TestSMCABI, this.TestSMCContractAddress)
            console.log('finish initSMC');
        },

        initBQKContract() {
            // Instantiate the smart contract object
            this.BQKTokenContract = new this.web3.eth.Contract(BQKTokenABI, this.BQKTokenContractAddress)
            console.log('finish initBQK Contract')
        },

        initNFTTokenContract() {
            // Instantiate the smart contract object
            this.NFTTokenContract = new this.web3.eth.Contract(NFTTokenABI, this.NFTTokenContractAddress)
            console.log('finish initNFT Contract')
        },
        async initializeWeb3() {
            this.loading = true;
            // Check if MetaMask is installed
            if (typeof window.ethereum !== 'undefined') {
                // Get the provider from MetaMask
                const provider = window.ethereum
                try {
                    // Request account access
                    await provider.request({ method: 'eth_requestAccounts' })

                    // Set up Web3 with the provider
                    this.web3 = new Web3(provider)

                    // Get the current account
                    const accounts = await this.web3.eth.getAccounts()
                    this.account = accounts[0]

                    // Get the account balance
                    const balance = await this.web3.eth.getBalance(this.account)
                    this.balance = this.web3.utils.fromWei(balance, 'ether')

                    this.initSMCContract();
                    this.initBQKContract();
                    this.initNFTTokenContract();
                    this.loading = false;

                } catch (error) {
                    // console.error(error)
                    this.loading = false
                }
            } else {
                // console.error('MetaMask not found')
                this.loading = false
            }
        },

        async mintAndApprovalNFT(tokenID, metadataIPFSHash) {
            try {
                const result = await this.NFTTokenContract.methods.mintAndApprovalNFT(this.TestSMCContractAddress, tokenID, metadataIPFSHash)
                    .send(
                        {
                            from: this.account,
                        }
                    );
                return result;
            } catch (error) {
                console.error(error);
            }
        },

        // Create New Auction SMC
        async createNewAuction(nftContract, tokenId, initialPrice, openBiddingTime, closeBiddingTime) {
            try {
                const result = await this.TestSMCContract.methods.createNewAuction(nftContract, tokenId, initialPrice, openBiddingTime, closeBiddingTime)
                    .send(
                        {
                            from: this.account,
                        }
                    );
                return result;
            } catch (error) {
                console.error(error);
            }
        },

        // Create New Auction - Upload to Backend
        async createNewAuctioToBackend(transactionHash) {
            const url = 'http://localhost:8080/api/v1/bidnow/create-new-auction?transactionHash=' + transactionHash;
            fetch(url, {
                method: 'POST',
            })
                .then((response) => response.json())
                .catch((error) => console.error(error));
        }
    }
})