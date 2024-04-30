In the Shell of the node run:
Would be preferred to SSH into the node as ctrl + w is needed to search file

```
cd /usr/share/javascript/proxmox-widget-toolkit
```

Take a backup of current config file
```
cp proxmoxlib.js proxmoxlib.js.bak
```

Edit the file:
```
nano proxmoxlib.js
```

Use ctrl+w in nano and search for “No valid subscription”

Replace “Ext.Msg.show” with “void”

```
void({ //Ext.Msg.show({
  title: gettext('No valid subscription'),
```

```
reboot
```

check it has applied:

```
grep -n -B 1 'No valid sub' /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js
```