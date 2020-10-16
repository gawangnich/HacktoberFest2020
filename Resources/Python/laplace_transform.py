import matplotlib.pyplot as plt
import scipy
from scipy.fftpack import fftshift
import numpy as np

x = np.arange(-3, 3, 0.01)
y = np.zeros(len(x))
y[150:450] = 1
plt.plot(x, y) # plot of the step function

yShift = fftshift(y) # shift of the step function
Fourier = scipy.fft(yShift) # Fourier transform of y implementing the FFT
Fourier = fftshift(Fourier) # inverse shift of the Fourier Transform
plt.plot(Fourier) # plot of the Fourier transform