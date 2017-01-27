/**
 * Created by rafaelcaviquioli <rafaelcitj@gmail.com>
 * User: rafaelcaviquioli
 * Date: 26/01/17
 * Time: 22:31
 */
(function ($) {
    $.fn.receitaws = function (options) {
        $this = this;

        $.fn.receitaws.options = {
            afterRequest: function () {
            },
            success: function (data) {
            },
            notfound: function (message) {
            },
            fail: function (message) {
            },
            fields: {},
            urlRequest: 'dist/php/receita-ws.php'
        };

        /*
         Duplicate request controller. (Cache)
         */
        $.fn.receitaws.lastRequest = {
            cnpj: null,
            data: null
        };


        function getData(cnpj) {
            cnpj = cnpj.replace(/\D/g, '');

            var lastRequest = $.fn.receitaws.lastRequest;

            return new Promise(function (success, fail) {
                if (lastRequest.cnpj == cnpj) {
                    success(lastRequest.dados);
                } else {
                    $.getJSON($.fn.receitaws.options.urlRequest + "?cnpj=" + cnpj, function (data) {
                        lastRequest.cnpj = cnpj;
                        lastRequest.dados = data;

                        success(data);
                    }).fail(function (jqxhr, textStatus, error) {
                        fail(textStatus + ", " + error);
                    });
                }
            });
        }


        $.fn.receitaws.init = function (options) {

            $.fn.receitaws.options = $.extend({}, $.fn.receitaws.options, options);

            return $this.keyup(function () {
                var cnpj = $(this).val().replace(/\D/g, '');

                if (cnpj.length != 14) {
                    return false;
                }
                options.afterRequest();

                getData(cnpj).then(function (data) {

                    if (data.status == 'OK') {
                        $.each(options.fields, function (index, value) {
                            if (typeof value == "string") {
                                $(options.fields[index]).val(data[index]);
                            } else if (typeof value == 'function') {
                                value(data[index]);
                            }
                        });

                        options.success(data);
                    } else {
                        options.notfound('CNPJ "' + $this.val() + '" not found.');
                    }

                }, function (error) {
                    options.fail(error);
                });
            });
        };

        return $.fn.receitaws.init(options);
    };
})(jQuery);