export default new class Core {
    getClassList(context, regexp) {
        return context.keys()
            .filter(key => key.match(regexp))
            .map(key => context(key));
    }

    getClassListMap(context, regexp) {
        let obj = {};
        context.keys()
            .filter(key => key.match(regexp))
            .forEach(key => {
                obj[this.getClassListMapObjectKey(key)] = context(key)
            });
        return obj;
    }

    getClassListMapObjectKey(key) {
        return key.replace(key.match(/(.)*\//)[0], '').replace('.js', '');
    }
}