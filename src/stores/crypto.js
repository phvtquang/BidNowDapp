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
            TestSMCContractAddress: '0xac4b8673B5f05A511486760faBdA7b49E62Da5f0',
            BQKTokenContractAddress: '0x1C89D7F4Aa64AFC56b1Fc10950DE506529DF38D5',
            NFTTokenContractAddress: '0xE7d7aed64e4d74D7fA46f92d25942436576A9C57',
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
                    console.error(error)
                    this.loading = false
                }
            } else {
                console.error('MetaMask not found')
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
                console.log('NFT minted and approval set:\n' + result);
            } catch (error) {
                console.error(error);
            }
        }
    }
})