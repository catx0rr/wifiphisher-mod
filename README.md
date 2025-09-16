# WifiPhisher

*Forked from [wifiphisher](https://github.com/wifiphisher/wifiphisher)*

### Features

- *Customized dynamic re-usable phishing page*

### Usage

*Install dependencies*
```sh
apt-get install -y libnl-3-dev libnl-genl-3-dev libssl-dev python3-virtualenv
```

*Remove old wifiphisher from apt*
```sh
apt-get remove -y wifiphisher --purge && \
rm -rf /bin/wifiphisher
```

*Clone repository*
```sh
cd /opt && \
git clone git@github.com:offsecph/wifiphisher.git && \
cd wifiphisher
```

*Build using virtual environment*
```sh
virtualenv -p python3 venv && \
source venv/bin/activate && \
pip install -r requirements.txt && \
python3 setup.py install && \
cd roguehostapd && python3 setup.py install && cd -
```

*Update and copy the rfkill.py to virtualenv*
```sh
cp -rfv /opt/wifiphisher/pyric/utils/rfkill.py \
  /opt/wifiphisher/venv/lib/python3.13/site-packages/pyric/utils/rfkill.py
```

### Phish Templates customization

*Modify the script.js depending on your need*
```sh
/opt/wifiphisher/phishing-templates/dynamic-phish-page/html/static/js/
```

*Create a symlink to the modified phishing page*
```sh
ln -sv /opt/wifiphisher/phishing-pages/ \
  /opt/wifiphisher/venv/lib/python3.13/site-packages/wifiphisher/data/ 
```

*Run wifiphisher*
```sh
wifiphisher
```
***NOTE: Always run wifiphisher after activating virtualenv***
