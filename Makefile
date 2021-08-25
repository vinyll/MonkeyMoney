deploy:
	ssh monkeymoney '\
		cd ~/monkeymoney/client && \
		git pull origin master && \
		sudo systemctl daemon-reload && \
		sudo systemctl restart monkeymoney-client && \
	echo "deployed!"'
