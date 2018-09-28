export const config = {
  salt: 'd6F3Efeq',
  secret: '123456789',
  algorithm: 'aes-256-ctr',
  userContractAdress: "0xa7eBABa96B828e21287447Fbd9A7E766f780bB2C",
  userContractAbi: [
    {
      constant: false,
      inputs: [
        { name: "emailPrivate", type: "string" },
        { name: "namePrivate", type: "string" },
        { name: "telefoneNumberPrivate", type: "string" },
        { name: "addressHomePrivate", type: "string" },
        { name: "_email", type: "string" },
        { name: "_name", type: "string" },
        { name: "_telefoneNumber", type: "string" },
        { name: "_addressHome", type: "string" }
      ],
      name: "createPublisher",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ name: "_email", type: "string" }],
      name: "createViewer",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "userAddress", type: "address" }],
      name: "isViewer",
      outputs: [{ name: "isIndeed", type: "bool", value: false }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_adressPublisher", type: "address" },
        { name: "fieldName", type: "string" },
        { name: "value", type: "string" }
      ],
      name: "updatePublisherFieldPrivacy",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "userAddress", type: "address" }],
      name: "isPublisher",
      outputs: [{ name: "isIndeed", type: "bool", value: false }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_adressPublisher", type: "address" },
        { name: "fieldName", type: "string" },
        { name: "value", type: "string" }
      ],
      name: "updatePublisherField",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "_address", type: "address" }],
      name: "getViewer",
      outputs: [
        { name: "isAdmin", type: "bool", value: false },
        { name: "email", type: "string", value: "" }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { name: "_adressPublisher", type: "address" },
        { name: "fieldName", type: "string" }
      ],
      name: "getPublicFieldsByPublisher",
      outputs: [{ name: "fieldValue", type: "string", value: "" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_adressPublisher", type: "address" },
        { name: "viewerAddress", type: "address" }
      ],
      name: "getPublisher",
      outputs: [
        { name: "email", type: "string" },
        { name: "name", type: "string" },
        { name: "phoneNumber", type: "string" },
        { name: "addressHome", type: "string" }
      ],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getPublisherList",
      outputs: [{ name: "publisherList", type: "address[]", value: [] }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_address", type: "address" },
        { name: "_email", type: "string" }
      ],
      name: "createAdminViewer",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "_address", type: "address" },
        { indexed: false, name: "isAdmin", type: "bool" },
        { indexed: false, name: "_time", type: "uint256" }
      ],
      name: "ViewerCreated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "_address", type: "address" },
        { indexed: false, name: "isAdmin", type: "bool" }
      ],
      name: "ViewerUpdated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "_address", type: "address" },
        { indexed: false, name: "_time", type: "uint256" }
      ],
      name: "PublisherCreated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "_address", type: "address" },
        { indexed: false, name: "_time", type: "uint256" }
      ],
      name: "PublisherUpdated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "_publisherAddress", type: "address" },
        { indexed: false, name: "_viewerAddres", type: "address" },
        { indexed: false, name: "_time", type: "uint256" }
      ],
      name: "PublisherIsViewed",
      type: "event"
    }
  ],
  logsContractAddress:"",
  logsContractAbi:"",
  minerAccaount:"0x2c4d6fef0fa74b5fb87e3bd60417ab6d1946fa88",
  minerPassword:"e4irqmiqvs"
};
