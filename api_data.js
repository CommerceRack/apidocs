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
    "url": "/providerExec",
    "title": "providerExec",
    "group": "admin",
    "name": "cryptTool_cryptTool",
    "examples": [
      {
        "title": "Legacy Doc",
        "content": "Legacy Doc\nNot available ** EXPERIMENTAL **\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  }
] });