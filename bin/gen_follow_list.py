import tweepy
import os

CONSUMER_KEY = os.environ["CONSUMER_KEY"]
CONSUMER_SECRET = os.environ["CONSUMER_SECRET"]
ACCESS_TOKEN = os.environ["ACCESS_TOKEN"]
ACCESS_TOKEN_SECRET = os.environ["ACCESS_TOKEN_SECRET"]

cursor = -1
while cursor != 0:
	auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
	auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
	api = tweepy.API(auth, wait_on_rate_limit=True)
	itr = tweepy.Cursor(api.friends_ids, id='@tsubakiyuzashi', cursor=cursor).pages()
	try:
		print("const g_follow_list = [")
		for friends_ids in itr.next():
			try:
				user = api.get_user(friends_ids)
				user_info = [user.screen_name]
				for u in user_info:
					print("    \"%s\"," % (u))
			except tweepy.error.TweepError as e:
				print(e.reason)
		print("    \"tsubakiyuzashi\"")
		print("]")
	except ConnectionError as e:
		print(e.reason)
	cursor = itr.next_cursor