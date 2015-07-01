CXX = g++
INCLUDES = -I../include -I../lib -I../lib/samp/SDK/amx -I../deps/v8 -I../deps/boost_1_58_0 -I../lib/mysql-linux/include
CFLAGS = -fPIC -m32 -Os -Wall -DLINUX -D__linux___
LIBS = -lrt -lpthread -lm -lz -ldl -static-libgcc -static-libstdc++ -std=c++11 
LDFLAGS = -shared -fPIC -Os -m32 -static-libgcc -static-libstdc++
BOOST_DIR = ../deps/boost_1_58_0/stage/lib
BOOST := \
	$(BOOST_DIR)/libboost_system.a \
	$(BOOST_DIR)/libboost_filesystem.a \
	$(BOOST_DIR)/libboost_date_time.a \
	$(BOOST_DIR)/libboost_regex.a \
	$(BOOST_DIR)/libboost_serialization.a \
	$(BOOST_DIR)/libboost_thread.a \
	$(BOOST_DIR)/libboost_wserialization.a

V8FLAGS := \
	../deps/v8/lib/libv8_base.a \
	../deps/v8/lib/libv8_libbase.a \
	../deps/v8/lib/libv8_snapshot.a \
	../deps/v8/lib/libv8_libplatform.a 
	
MYSQL := ../lib/mysql-linux/lib/libmysqlclient_r.a
	
samp.js.so: amxplugin.o main.o SAMPJS.o Script.o Server.o Utils.o FileSystem.o Sockets.o Timers.o Callbacks.o Events.o Players.o Helpers.o HTTP.o MySQL.o
	$(CXX) $(LDFLAGS) $(INCLUDES) -d samp.js.def -o ../bin/samp.js.so amxplugin.o main.o SAMPJS.o Script.o Server.o Utils.o FileSystem.o Sockets.o Timers.o Callbacks.o Events.o Players.o Helpers.o HTTP.o MySQL.o $(MYSQL) $(V8FLAGS) $(BOOST) $(LIBS)

main.o: main.cpp SAMPJS.cpp Script.cpp samp/Server.cpp utils/Utils.cpp utils/Helpers.cpp samp/Callbacks.cpp samp/Events.cpp samp/Players.cpp io/FileSystem.cpp io/Sockets.cpp io/HTTP.cpp io/Timers.cpp io/MySQL.cpp ../lib/samp/SDK/amxplugin.cpp 
	$(CXX) $(CFLAGS) $(INCLUDES) -c main.cpp $(LIBS)


SAMPJS.o: SAMPJS.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c SAMPJS.cpp $(LIBS)
	
Script.o: Script.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c Script.cpp $(LIBS)
	


FileSystem.o: io/FileSystem.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/FileSystem.cpp $(LIBS)
	
HTTP.o: io/HTTP.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/HTTP.cpp $(LIBS)
	
MySQL.o: io/MySQL.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/MySQL.cpp $(LIBS)
	
Sockets.o: io/Sockets.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/Sockets.cpp $(LIBS)

Timers.o: io/Timers.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/Timers.cpp $(LIBS)
	
	
	
Callbacks.o: samp/Callbacks.cpp samp/Events.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/Callbacks.cpp $(LIBS)

Events.o: samp/Events.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/Events.cpp $(LIBS)
	
Players.o: samp/Players.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/Players.cpp $(LIBS)
	
Server.o: samp/Server.cpp 
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/Server.cpp $(LIBS)
	
	
	
Helpers.o: utils/Helpers.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c utils/Helpers.cpp $(LIBS)
	
Utils.o: utils/Utils.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c utils/Utils.cpp $(LIBS)
	
	

amxplugin.o:  ../lib/samp/SDK/amxplugin.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c  ../lib/samp/SDK/amxplugin.cpp $(LIBS)



