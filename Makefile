deploy:
	ssh monkeymoney '\
		cd ~/monkeymoney/client && \
		git pull origin master && \
		yarn && \
		npx browserslist@latest --update-db && \
		sudo systemctl daemon-reload && \
		sudo systemctl restart monkeymoney-client && \
	echo "deployed!"'
