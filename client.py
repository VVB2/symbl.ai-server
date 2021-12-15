from urllib.request import urlopen
import json
data = json.loads(urlopen("https://react-sandwich-app.herokuapp.com/api/get-data").read().decode('utf-8'))
for i in data['data']:
    print(f'ID: {i["id"]}, Step {i["id"]}: {i["step"]}')