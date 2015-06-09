CXX = g++
INCLUDES = -I../include -I../lib -I../lib/samp/SDK/amx -I../deps/v8 -I../deps/boost_1_58_0 -I../deps/libuv/include
CFLAGS = -fPIC -m32 -O3 -Wall -DLINUX -D__LINUX__
LIBS = -lrt -lpthread -static-libgcc -static-libstdc++ -std=c++11 
LDFLAGS = -shared -fPIC -m32 -static-libgcc -static-libstdc++
V8FLAGS := \
	../deps/v8/lib/libv8_base.a \
	../deps/v8/lib/libv8_libbase.a \
	../deps/v8/lib/libv8_snapshot.a \
	../deps/v8/lib/libv8_libplatform.a \
	../deps/boost_1_58_0/stage/32bit/lib/libboost_filesystem.a \
	../deps/boost_1_58_0/stage/32bit/lib/libboost_system.a \
	../deps/libuv/out/Release/libuv.a
	
samp.js.so: amxplugin.o main.o Server.o Utils.o FileSystem.o Callbacks.o Events.o SAMP_Players.o Helpers.o
	$(CXX) $(LDFLAGS) $(INCLUDES) -d samp.js.def -o ../bin/samp.js.so amxplugin.o main.o SAMP_JS.o SAMP_Utils.o SAMP_FileSystem.o SAMP_uvFileSystem.o SAMP_Callbacks.o SAMP_Events.o SAMP_Players.o Helpers.o $(V8FLAGS) $(LIBS)

main.o: main.cpp SAMP_JS.cpp utils/SAMP_Utils.cpp samp/SAMP_Callbacks.cpp samp/SAMP_Events.cpp samp/SAMP_Players.cpp io/SAMP_FileSystem.cpp io/SAMP_uvFileSystem.cpp ../lib/samp/SDK/amxplugin.cpp utils/Helpers.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c main.cpp $(LIBS)

SAMP_JS.o: SAMP_JS.cpp 
	$(CXX) $(CFLAGS) $(INCLUDES) -c SAMP_JS.cpp $(LIBS)
	
SAMP_Utils.o: utils/SAMP_Utils.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c utils/SAMP_Utils.cpp $(LIBS)
	
SAMP_FileSystem.o: io/SAMP_FileSystem.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/SAMP_FileSystem.cpp $(LIBS)

SAMP_uvFileSystem.o: io/SAMP_uvFileSystem.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c io/SAMP_uvFileSystem.cpp $(LIBS)

SAMP_Callbacks.o: samp/SAMP_Callbacks.cpp samp/SAMP_Events.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/SAMP_Callbacks.cpp $(LIBS)

SAMP_Events.o: samp/SAMP_Events.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/SAMP_Events.cpp $(LIBS)
	
SAMP_Players.o: samp/SAMP_Players.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c samp/SAMP_Players.cpp $(LIBS)
	
Helpers.o: utils/Helpers.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c utils/Helpers.cpp $(LIBS)

amxplugin.o:  ../lib/samp/SDK/amxplugin.cpp
	$(CXX) $(CFLAGS) $(INCLUDES) -c  ../lib/samp/SDK/amxplugin.cpp $(LIBS)


