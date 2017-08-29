#!/usr/bin/env python
import time

def greeting():
    '''Returns a pleasant, semi-useful greeting.'''
    return "Hello world, the time is: " + time.ctime()

def main():
    print greeting()

if __name__ == '__main__':
    main()
