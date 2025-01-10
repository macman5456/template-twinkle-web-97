import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { Liquidity, Token, TokenAmount, TOKEN_PROGRAM_ID } from '@raydium-io/raydium-sdk';
import bs58 from 'bs58';

export const SOLANA_RPC = 'https://api.mainnet-beta.solana.com';

export const initializeConnection = () => {
  return new Connection(SOLANA_RPC);
};

export const createKeypairFromPrivateKey = (privateKey: string) => {
  try {
    const decodedKey = bs58.decode(privateKey);
    return Keypair.fromSecretKey(decodedKey);
  } catch (error) {
    console.error('Invalid private key format');
    throw new Error('Invalid private key format');
  }
};

export const getTokenBalance = async (connection: Connection, publicKey: PublicKey, tokenMint: string) => {
  try {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: TOKEN_PROGRAM_ID,
    });

    const account = tokenAccounts.value.find(
      (account) => account.account.data.parsed.info.mint === tokenMint
    );

    return account ? account.account.data.parsed.info.tokenAmount.uiAmount : 0;
  } catch (error) {
    console.error('Error fetching token balance:', error);
    return 0;
  }
};

export const executeSwap = async (
  connection: Connection,
  keypair: Keypair,
  tokenMint: string,
  amount: number
) => {
  try {
    // This is a simplified version. In a real implementation, you would:
    // 1. Find the best pool
    // 2. Calculate amounts
    // 3. Create and send the transaction
    console.log('Executing swap with parameters:', {
      tokenMint,
      amount,
    });
    
    // Placeholder for actual swap logic
    return { success: true, txId: 'simulation-only' };
  } catch (error) {
    console.error('Error executing swap:', error);
    throw error;
  }
};