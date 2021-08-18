deploy:
	ssh monkeymoney '\
		cd ~/monkeymoney/client && \
		git pull && \
		sudo systemctl daemon-reload && \
		sudo systemctl restart monkeymoney-client && \
	echo "deployed!"'
