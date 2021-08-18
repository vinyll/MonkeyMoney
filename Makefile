deploy:
	ssh monkeymoney.connect.cafe '\
		cd ~/monkeymoney/client && \
		git pull && \
		sudo systemctl daemon-reload && \
		sudo systemctl restart monkeymoney-client && \
	echo "deployed!"'
