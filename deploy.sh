#!/bin/bash

# Configuration
SERVER="${HOST}"            # Votre serveur FTP
USERNAME="${USERNAME}"      # Votre nom d'utilisateur FTP
PASSWORD="${FTP_PASSWORD}"  # Votre mot de passe FTP
LOCALDIR="build/"           # Dossier local à téléverser
REMOTEDIR="/public_html/React/Build" # Dossier distant où téléverser

# Commande de déploiement
lftp -e "
open $SERVER
user $USERNAME $PASSWORD
lcd $LOCALDIR
cd $REMOTEDIR
mirror --reverse --delete --verbose $LOCALDIR $REMOTEDIR
bye
"
