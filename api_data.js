define({ api: [
  {
    "type": "POST",
    "url": "/adminControlPanelAction",
    "title": "adminControlPanelAction",
    "group": "admin",
    "name": "adminControlPanelAction",
    "description": "<p>special functions to automate system level behaviors.<strong> EXPERIMENTAL (may change significantly in future versions) </strong></p><table><thead><tr><th>verb</th><th>explanation</th></tr></thead><tbody><tr><td>config-rebuild</td><td>rebuilds config file</td></tr><tr><td>uwsgi-restart</td><td>restart uwsgi server</td></tr><tr><td>nginx-restart</td><td>restart nginx server</td></tr></tbody></table>",
    "parameter": {
      "fields": {
        "Input": [
          {
            "group": "Input",
            "type": "String",
            "field": "verb",
            "optional": false,
            "description": "<p>see verb table</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Output": [
          {
            "group": "Output",
            "type": "String",
            "field": "contents",
            "optional": false,
            "description": "<p>output from operation</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/cryptTool",
    "title": "cryptTool",
    "group": "admin",
    "name": "cryptTool_cryptTool",
    "examples": [
      {
        "title": "Legacy Doc",
        "content": "Legacy Doc\n<API id=\"cryptTool\">\n<input  id=\"verb\">make-key|make-csr|make-self-signed-crt</input>\n<input  if=\"verb:make-key\" id=\"length\" optional=\"1\">1024|2048|4096</input>\n<output if=\"verb:make-key\" id=\"key\">key text</output>\n<input  if=\"verb:make-csr\" id=\"key\"></input>\n<input  if=\"verb:make-csr\" id=\"company\">any company, inc.</input>\n<input  if=\"verb:make-csr\" id=\"city\"></input>\n<input  if=\"verb:make-csr\" id=\"state\"></input>\n<input  if=\"verb:make-csr\" id=\"fqdn\">www.domain.com</input>\n<output if=\"verb:make-csr\" id=\"csr\">csr text</output>\n<input  if=\"verb:make-self-signed-crt\" id=\"key\"></input>\n<input  if=\"verb:make-self-signed-crt\" id=\"csr\"></input>\n<output if=\"verb:make-self-signed-crt\" id=\"crt\">crt text</output>\n</API>\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/domainLookup",
    "title": "",
    "group": "admin",
    "name": "domainLookup_domainLookup",
    "description": "<p>Not available <strong> EXPERIMENTAL </strong></p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/loadPlatformJSON",
    "title": "",
    "group": "admin",
    "name": "loadPlatformJSON",
    "description": "<p>TODO</p>",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "Response\n{\n\"_version\":201318,\n\"_start\":\"xyz\",\t\t\t// default starting position\n\"_inputs\":[\n   { \"required\":1,\"var\":\"email\",\"type\":\"text\",\"label\":\"Email\" },\n   { \"required\":1,\"var\":\"firstname\",\"type\":\"text\",\"label\":\"Purchasing Contact Firstname\" },\n   { \"required\":1,\"var\":\"lastname\",\"type\":\"text\",\"label\":\"Purchasing Contact Lastname\" },\n\t   { \"required\":1,\"var\":\"register_password\",\"type\":\"text\",\"label\":\"Registration Password\" },\n \n   // *** HOW TO OVERRIDE _start ***\n   // example1: variable starting points, user specified, no security, no validation.\n   { \"required\":0, \"type\":\"text\", \"var\":\"_start\", \"label\":\"This is a horrible idea.\" },\n \n   // example2: using plain text passwords (poor security) \n   // for 'match/plain' - we have two passwords \"TURTLE\" and \"LLAMA\", both use the same starting points 'start-insecure'\n   { \"required\":0, \"type\":\"match\", \"if\":\"register_password\", \"is\":\"TURTLE\", \"var\":\"_start\", \"value\":\"start-insecure\" },\n   { \"required\":0, \"type\":\"match\", \"if\":\"register_password\", \"is\":\"LLAMA\" , \"var\":\"_start\", \"value\":\"start-insecure\" },\n   \n   // example3: using md5 digest for best security\n   // for 'match-md5' - we will prepend the \"saltedby\" 'concatenateMe' with the users password \n\t// (which *MUST* not be stored in the file - but for this example it is 'KITTEN')\n   // the md5 digest for 'concatenateMeKITTEN' is c3b9ba2823f9c2ba02a4ee89f8ac4450\n   // since digests aren't reversible, they can be stored safely in public repos.\n   { \"required\":0, \"type\":\"match-md5\", \"if\":\"register_password\", \"saltedby\":\"concatenateMe\", \n\t\t\t\t\t\t\"is\":\"c3b9ba2823f9c2ba02a4ee89f8ac4450\", \"var\":\"_start\", \"value\":\"start-secure\" },\n   \n],\n}\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/providerExec",
    "title": "providerExec",
    "group": "admin",
    "name": "providerExec",
    "examples": [
      {
        "title": "Not available ** EXPERIMENTAL **",
        "content": "Not available ** EXPERIMENTAL **\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  }
] });