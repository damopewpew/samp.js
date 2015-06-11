CXX = g++
INCLUDES = -I../include -I../lib -I../lib/samp/SDK/amx -I../deps/v8 -I../deps/boost_1_58_0
CFLAGS = -fPIC -m32 -O3 -Wall -DLINUX -D__LINUX__
LIBS = -lrt -lpthread -static-libgcc -static-libstdc++ -std=c++11 
LDFLAGS = -shared -fPIC -m32 -static-libgcc -static-libstdc++
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
	../deps/v8/lib/libv8_libplatform.a \
	../deps/boost_1_58_0/stage/lib/libboost_filesystem.a \
	../deps/boost_1_58_0/stage/lib/libboost_system.a \
	../deps/boost_1_58_0/stage/lib/
	
samp.js.so: amxplugin.o main.o Server.o Utils.o FileSystem.o Sockets.o Socket.o Callbacks.o Events.o Players.o Helpers.o
	$(CXX) $(LDFLAGS) $(INCLUDES) -d samp.js.def -o ../bin/samp.js.so amxplugin.o main.o Server.o Utils.o FileSystem.o Sockets.o Socket.o Callbacks.o Events.o Players.o Helpers.o $(V8FLAGS) $(BOOST) $(LIBS)

main.o: main.cpp Server.cpp utils/Utils.cpp samp/Callbacks.cpp samp/Events.cpp samp/Players.cpp io/FileSystem.cpp io/Sockets.cpp io/Socket.cpp ../lib/samp/SDK/amxplugin.cpp utils/Helpers.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c main.cpp $(LIBS)

Server.o: Server.cpp 
	$(CXX) $(CFLAGS) $(INCLUDES) -c Server.cpp $(LIBS)
	
Utils.o: utils/Utils.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c utils/Utils.cpp $(LIBS)
	
FileSystem.o: io/FileSystem.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/FileSystem.cpp $(LIBS)
	
Sockets.o: io/Sockets.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/Sockets.cpp $(LIBS)
	
Socket.o: io/Socket.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/Socket.cpp $(LIBS)

Callbacks.o: samp/Callbacks.cpp samp/Events.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/Callbacks.cpp $(LIBS)

Events.o: samp/Events.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/Events.cpp $(LIBS)
	
Players.o: samp/Players.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/Players.cpp $(LIBS)
	
Helpers.o: utils/Helpers.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c utils/Helpers.cpp $(LIBS)

amxplugin.o:  ../lib/samp/SDK/amxplugin.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c  ../lib/samp/SDK/amxplugin.cpp $(LIBS)


