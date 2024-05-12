Run all 3 commands to enable correct repositories on fedora workstation

```bash
sudo dnf install fedora-workstation-repositories
```

```bash
sudo dnf config-manager --set-enabled rpmfusion-free rpmfusion-nonfree
```

```bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Add fedora to local AD domain.

install the following packages:

```bash
sudo dnf install realmd sssd oddjob oddjob-mkhomedir adcli samba-common-tools
```

connect to the domain using the following command:

```bash
sudo realm join -U administrator yourdomain.com
```

configure the file `/etc/sssd/sssd.conf` to include the following:

```bash
[sssd]
domains = yourdomain.com
config_file_version = 2
services = nss, pam

[domain/yourdomain.com]
ad_domain = yourdomain.com
krb5_realm = YOURDOMAIN.COM
realmd_tags = manages-system joined-with-adcli
cache_credentials = True
id_provider = ad
krb5_store_password_if_offline = True
default_shell = /bin/bash
ldap_id_mapping = True
use_fully_qualified_names = False
fallback_homedir = /home/%u
access_provider = ad
sudo_provider = ad
```

specifically the last line is not default.

Then restart sssd

```bash
sudo systemctl restart sssd
```

or restart to be able to login.
