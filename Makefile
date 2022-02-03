deploy:
	ssh monkeymoney '\
		cd ~/monkeymoney/client && \
		git pull origin master && \
		yarn && \
		sudo systemctl daemon-reload && \
		sudo systemctl restart monkeymoney-client && \
	echo "deployed!"'
