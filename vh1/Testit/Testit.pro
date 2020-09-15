#-------------------------------------------------
#
# Project created by QtCreator 2015-08-19T10:18:43
# Testing if vscode updates
#
#-------------------------------------------------

QT       += testlib

QT       -= gui

TARGET = tst_tmp
CONFIG   += console
CONFIG   -= app_bundle

TEMPLATE = app


SOURCES += tst_paivays.cpp\
    ../Paivays/paivays.cpp
DEFINES += SRCDIR=\\\"$$PWD/\\\"

HEADERS += \
    ../Paivays/paivays.hh

INCLUDEPATH += ../Paivays
DEPENDPATH  += ../Paivays
