# contracts/handlers/puffer-vault-handler

## Classes

### PufferVaultHandler

Handler for the `PufferVaultV2` contract exposing methods to interact
with the contract.

#### Constructors

##### new PufferVaultHandler()

> **new PufferVaultHandler**(`chain`, `walletClient`, `publicClient`): [`PufferVaultHandler`](puffer-vault-handler.md#puffervaulthandler)

Create the handler for the `PufferVaultV2` contract exposing
methods to interact with the contract.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient` | `object` | The wallet client to use for wallet interactions. |
| `publicClient` | `object` | The public client to use for public interactions. |

###### Returns

[`PufferVaultHandler`](puffer-vault-handler.md#puffervaulthandler)

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:29](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/contracts/handlers/puffer-vault-handler.ts#L29)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chain` | `private` | [`Chain`](../../chains/constants.md#chain) | Chain to use for the client. |
| `publicClient` | `private` | `object` | The public client to use for public interactions. |
| `viemChain` | `private` | `Chain` | - |
| `walletClient` | `private` | `object` | The wallet client to use for wallet interactions. |

#### Methods

##### balanceOf()

> **balanceOf**(`walletAddress`): `Promise`\<`bigint`\>

Check the pufETH balance of the wallet.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to check the balance of. |

###### Returns

`Promise`\<`bigint`\>

pufETH balance in wei.

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:115](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/contracts/handlers/puffer-vault-handler.ts#L115)

##### depositETH()

> **depositETH**(`walletAddress`): `object`

Deposit ETH to the given wallet address. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to get the ETH from. |

###### Returns

`object`

`transact: (value: bigint) => Promise<Address>` - Used to
make the transaction with the given value.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: (`value`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `bigint` |

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/contracts/handlers/puffer-vault-handler.ts#L62)

##### depositStETH()

> **depositStETH**(`walletAddress`, `value`): `object`

Deposit stETH to the given wallet address. This doesn't make the
transaction but returns two methods namely `transact` and
`estimate`.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | \`0x$\{string\}\` | Wallet address to get the ETH from. |
| `value` | `bigint` | Value in wei of the stETH to deposit. |

###### Returns

`object`

`transact: () => Promise<Address>` - Used to make the
transaction with the given value.

`estimate: () => Promise<bigint>` - Gas estimate of the
transaction.

###### estimate()

> **estimate**: () => `Promise`\<`bigint`\>

###### Returns

`Promise`\<`bigint`\>

###### transact()

> **transact**: () => `Promise`\<\`0x$\{string\}\`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:91](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/contracts/handlers/puffer-vault-handler.ts#L91)

##### getAllowance()

> **getAllowance**(`ownerAddress`, `spenderAddress`): `Promise`\<`bigint`\>

Get the allowance for the given owner and spender.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | \`0x$\{string\}\` | Address of the owner. |
| `spenderAddress` | \`0x$\{string\}\` | Address of the spender. |

###### Returns

`Promise`\<`bigint`\>

Allowance for the given owner and spender.

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:136](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/contracts/handlers/puffer-vault-handler.ts#L136)

##### getContract()

> `private` **getContract**(): `object`

###### Returns

`object`

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:39](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/contracts/handlers/puffer-vault-handler.ts#L39)

##### getPufETHRate()

> **getPufETHRate**(): `Promise`\<`bigint`\>

Get the rate of pufETH compared to ETH.

###### Returns

`Promise`\<`bigint`\>

Rate of pufETH compared to 1 ETH.

###### Source

[lib/contracts/handlers/puffer-vault-handler.ts:124](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/contracts/handlers/puffer-vault-handler.ts#L124)
