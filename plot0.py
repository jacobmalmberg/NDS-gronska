#to concatenate and plot

import matplotlib.pyplot as plt
from scipy.misc import imread
import numpy as np

def plot_losses(network, G_losses, D_losses, G_losses_val, D_losses_val):

    """ creates two plots. One for the Generator loss and one for the Discriminator loss and saves these figures
    """

    D_loss_fig = plt.figure('Discriminator cost')
    params = {'legend.fontsize': 15,
          'legend.handlelength': 1}
    plt.rcParams.update(params)
    plt.plot(D_losses, color='b', linewidth=1.5, label='training')  # axis=0
    plt.plot(D_losses_val, color='purple', linewidth=1.5, label='validation')  # axis=0
    plt.legend(loc='upper left')
    plt.xlabel("Update step")
    plt.ylim(0,15)
    plt.ylabel("Cost")
    #D_loss_fig.savefig('/home/projektet/network_v8/plots/D_cost' + str(epoch) + '_' + str(current_batch) +'.png', dpi=D_loss_fig.dpi)
    #path = "/home/jacob/Documents/DD2424 projekt/lab/l_to_lab/"
    D_loss_fig.savefig('D_cost_' + str(network) +'_.png', dpi=D_loss_fig.dpi)
    #plt.clf()
    plt.close(D_loss_fig)



    G_loss_fig = plt.figure('Generator cost')
    plt.plot(G_losses, color='b', linewidth=1.5, label='training')  # axis=0
    plt.plot(G_losses_val, color='purple', linewidth=1.5, label='validation')  # axis=0
    plt.legend(loc='upper left')
    plt.xlabel("Update step")
    plt.ylim(0,40)
    plt.ylabel("Cost")
    # G_loss_fig.savefig('/home/projektet/network_v8/plots/G_cost' + str(epoch) + '_' + str(current_batch) +'.png', dpi=G_loss_fig.dpi)
    G_loss_fig.savefig('G_cost_' + str(network) +'_.png', dpi=G_loss_fig.dpi)
    #plt.clf()
    plt.close(G_loss_fig)


D_losses = np.load('D_losses_network_9_60_epochs.npy')
D_losses_val = np.load('D_losses_val_network_9_60_epochs.npy')

G_losses = np.load('G_losses_network_9_60_epochs.npy')
G_losses_val = np.load('G_losses_val_network_9_60_epochs.npy')

#print (G_losses_val.shape)

plot_losses('average_patchgan', G_losses, D_losses, G_losses_val, D_losses_val)
