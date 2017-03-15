import discord
import datetime
from apscheduler.schedulers.background import BackgroundScheduler

from discord.ext.commands import Bot
my_bot = Bot(command_prefix="!")
@my_bot.event
async def on_read():
    print("Client logged in")
@my_bot.command()
async def hello(*args):
    return await my_bot.say("Hello, world!")

@my_bot.command()
async def setgb():
	print("notifying")
	date = datetime.datetime.now()
	scheduler = BackgroundScheduler()
	#scheduler.add_job(my_bot.say("GB!"),'interval',seconds = 15)
	notify()
	scheduler.start()
	return
		

@my_bot.command()
async def notify():
	print("notifying")
	return my_bot.say("GB!")


my_bot.run("MjkwNjU5NDAwOTE2NjY0MzIx.C6eKfg.zHWCzpQWb6G0YM4NCwQrii9Ptm8")