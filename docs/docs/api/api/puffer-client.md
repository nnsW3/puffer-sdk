# api/puffer-client

## Classes

### PufferClient

The core class and the main entry point of the Puffer SDK.

#### Constructors

##### new PufferClient()

> **new PufferClient**(`chain`, `walletClient`?, `publicClient`?): [`PufferClient`](puffer-client.md#pufferclient)

Create the Puffer Client.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](../chains/constants.md#chain) | Chain to use for the client. |
| `walletClient`? | `object` | The wallet client to use for wallet interactions. |
| `publicClient`? | `object` | The public client to use for public interactions. |

###### Returns

[`PufferClient`](puffer-client.md#pufferclient)

###### Source

[lib/api/puffer-client.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/api/puffer-client.ts#L30)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `publicClient` | `private` | `object` |
| `vault` | `public` | [`PufferVaultHandler`](../contracts/handlers/puffer-vault-handler.md#puffervaulthandler) |
| `walletClient` | `private` | `object` |

#### Methods

##### requestAddresses()

> **requestAddresses**(): `Promise`\<`RequestAddressesReturnType`\>

Request addresses from the wallet.

###### Returns

`Promise`\<`RequestAddressesReturnType`\>

An array of wallet addresses.

###### Source

[lib/api/puffer-client.ts:62](https://github.com/PufferFinance/puffer-sdk/blob/5f6d413b8f75f7cc92a3a05df2c87e167e2a4977/lib/api/puffer-client.ts#L62)
