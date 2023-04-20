import { defineStore } from 'pinia'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { Buffer } from 'buffer'

const projectId = "2OAkIAfi3AqTu1mUfvOghtFY2T7"
const projectSecret = "fc6e975f9ca02f79ab0f14334f81dedb"
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = new ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export const useMintNFTStore = defineStore('MintNFTStore', {
    state: () => {
        return {
        }
    },
    actions: {

        // UPLOAD IMAGE TO IPFS
        async uploadFile(file) {
            try {
                // Convert the file to a Buffer
                const fileBuffer = await file.arrayBuffer()
                const buffer = Buffer.from(fileBuffer)

                // Upload the file to IPFS
                const result = await client.add(buffer)

                // Return the IPFS hash of the file
                console.log("File uploaded: " + result.cid.toString())
                return result.cid.toString()

            } catch (err) {
                console.error(err)
            }
        },

        // UPLOAD METADATA TO IPFS
        async uploadMetadata(metadata) {
            try {
                // Convert the file to a Buffer
                const metadataBuffer = Buffer.from(JSON.stringify(metadata))

                // Upload the file to IPFS
                const result = await client.add(metadataBuffer)

                // Return the IPFS hash of the file
                console.log("Metadata uploaded: " + result.cid.toString())
                return result.cid.toString()
            } catch (err) {
                console.error(err)
            }
        }

    }
})