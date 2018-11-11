import './index.less';

import React, { PureComponent } from 'react';

export default class Footer extends PureComponent {
  static $i18nPath = 'footer';

  render = () => {
    const year = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="copyright">
          {this.$i18n('copyright', year, '沪 ICP 备 XXXXXXX 号')}
        </div>
      </footer>
    );
  }
}
