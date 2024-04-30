Run all 3 commands to enable correct repositories on fedora workstation
```
sudo dnf install fedora-workstation-repositories
```

```
sudo dnf config-manager --set-enabled rpmfusion-free rpmfusion-nonfree
```

```
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```
