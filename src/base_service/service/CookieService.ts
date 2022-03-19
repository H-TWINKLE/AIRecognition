class CookieService {
    private static instance: CookieService

    public static getInstance(): CookieService {
        this.instance || (this.instance = new CookieService())
        return this.instance
    }

    /**
     * 获取cookies
     * @param name
     */
    public getCookie(name: string) {
        var searchName = name + '='
        if (document.cookie !== '') {
            var cookies = document.cookie.split(';')
            for (var i = 0; i < cookies.length; i++) {
                var c = cookies[i]
                while (c.charAt(0) == '') //第一个字符为空则从下一个字符开始读
                    c = c.substring(1, c.length)
                if (c.indexOf(searchName) == 0) //判断是否取到相应的名字
                    return c.substring(searchName.length, c.length)
            }
        }
        return null
    }


    /**
     * 封装设置cookie
     * @param c_name
     * @param value
     * @param expiredays
     */
    public setCookie(c_name: string, value: string, expiredays: number) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toUTCString())
    }

    /**
     * 封装删除cookie
     * @param name
     */
    public delCookie(name: any) {
        var exp = new Date()
        exp.setTime(exp.getTime() - 1)
        var cval = this.getCookie(name)
        if (cval !== null)
            document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString()
    }
}

export default CookieService.getInstance()