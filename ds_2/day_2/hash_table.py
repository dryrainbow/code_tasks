class Store:
    def __init__(self):
        self.store = []

    def get(self, key):
        for (k, v) in self.store:
            if k == key:
                return v
        return -1

    def update(self, key, value):
        found = False
        for i, kv in enumerate(self.store):
            if key == kv[0]:
                self.store[i] = (key, value)
                found = True
                break

        if not found:
            self.store.append((key, value))

    def remove(self, key):
        for i, kv in enumerate(self.store):
            if key == kv[0]:
                del self.store[i]


class MyHashMap(object):

    def __init__(self):
        self.key_space = 2069
        self.hash_table = [Store() for i in range(self.key_space)]


    def put(self, key, value):
        hash_key = self.hash_function(key)
        self.hash_table[hash_key].update(key, value)


    def get(self, key):
        hash_key = self.hash_function(key)
        return self.hash_table[hash_key].get(key)


    def remove(self, key):
        hash_key = self.hash_function(key)
        self.hash_table[hash_key].remove(key)

    def hash_function(self, key):
        return key % self.key_space
