$('[name="tags-search"]').keyup(function () {
    let filter = this.value.toLowerCase();
    let items = 0;
    const visibleItemsCount = 6;
    $card.removeClass(HIDDEN_CLASS);
    $card.each(function () {
        let $this = $(this);
        let name = $this
            .find('.card-title')
            .text()
            .toLowerCase()
            .replace(/\r?\n/g, '');
        if (name.indexOf(filter) !== -1) {
            if (items > visibleItemsCount - 1) {
                $this.addClass(HIDDEN_CLASS);
            }
            items++;
        } else {
            $this.addClass(HIDDEN_CLASS);
        }
    });

    if (items === 0) {
        $('.error__search').removeClass(HIDDEN_CLASS);
    } else {
        $('.error__search').addClass(HIDDEN_CLASS);
    }
});