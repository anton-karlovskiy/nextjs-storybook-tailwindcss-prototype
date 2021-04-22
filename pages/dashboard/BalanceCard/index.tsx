
import clsx from 'clsx';

import Paper from 'components/Paper';
import List, { ListItem } from 'components/List';

const META_MASK_WALLET = {
  name: 'MetaMask',
  accounts: [
    {
      address: '0xFE70556553ghE...5321',
      tokens: [
        {
          color: '#a839ff',
          quantity: 2000.43,
          name: 'ETH'
        },
        {
          color: '#ffb039',
          quantity: 555.531,
          name: 'LINK'
        },
        {
          color: '#499dff',
          quantity: 23.476,
          name: 'DGCL'
        },
        {
          color: '#0fc16e',
          quantity: 1476.397,
          name: 'QNT'
        },
        {
          color: '#e81616',
          quantity: 8241,
          name: 'ZCX'
        }
      ]
    },
    {
      address: '0xFE70556553ghE...5334',
      tokens: [
        {
          color: '#2400ff',
          quantity: 2000.43,
          name: 'ETH'
        },
        {
          color: '#374e5e',
          quantity: 8241,
          name: 'ZCX'
        }
      ]
    }
  ]
};

const POLKADOT_WALLET = {
  name: 'Polkadot.js',
  accounts: [
    {
      address: '0xFE70556553ghE...5347',
      tokens: [
        {
          color: '#a839ff',
          quantity: 2000.43,
          name: 'ETH'
        },
        {
          color: '#ffb039',
          quantity: 555.531,
          name: 'LINK'
        },
        {
          color: '#499dff',
          quantity: 23.476,
          name: 'DGCL'
        }
      ]
    }
  ]
};

const WALLETS = [
  META_MASK_WALLET,
  POLKADOT_WALLET
];

const BalanceCard = (): JSX.Element => (
  <Paper
    style={{
      border: 'none'
    }}
    className={clsx(
      'font-medium'
    )}>
    <h3
      className={clsx(
        'text-center',
        'text-4xl',
        'my-6'
      )}>
      $135340.5
    </h3>
    <div className='text-xs'>
      {WALLETS.map(wallet => (
        <div
          key={wallet.name}>
          <h4 className='text-sm'>
            {wallet.name}
          </h4>
          <List>
            {wallet.accounts.map(account => (
              <ListItem key={account.address}>
                <span
                  className={clsx(
                    'block',
                    'text-textSecondary'
                  )}>
                  {account.address}
                </span>
                <ul
                  className={clsx(
                    'flex',
                    'flex-wrap'
                  )}>
                  {account.tokens.map(token => (
                    <li
                      key={token.name}
                      className={clsx(
                        'w-1/3',
                        'space-x-0.5',
                        'mt-1'
                      )}>
                      <span
                        style={{ color: token.color }}>
                        ●
                      </span>
                      <span>{token.quantity}</span>
                      <span>{token.name}</span>
                    </li>
                  ))}
                </ul>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  </Paper>
);

export default BalanceCard;
